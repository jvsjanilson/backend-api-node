import type { Request, Response } from 'express'
import { validate as isUUID } from "uuid"
import { validate } from 'class-validator'
import { ProdutoRepository } from '@/repositories/produto.repository.js'
import {ProdutoCreateDto, ProdutoUpdateDto} from '@/dtos/produto.dto.js'

class ProdutoController {
  private repo: ProdutoRepository

  constructor() {
    this.repo = new ProdutoRepository()
  }

  findAll = async (_: Request, response: Response) : Promise<Response> => {
    const produtos = await this.repo.getAll()
    return response.status(200).json({
      data: produtos
    });
  }

  create = async (request: Request, response: Response) : Promise<Response>  => {
    const {name, price } = request.body;
    const dto = new ProdutoCreateDto()
    dto.name = name
    dto.price = price

    const errors = await validate(dto)

    if (errors.length > 0) {
      return response.status(422).json(errors)
    }

    const res = await this.repo.store(dto)
    return response.status(201).json(res)
  }

  update = async (req: Request, res: Response) : Promise<Response> => {
    const {name, price } = req.body;
    const id = String(req.params.id)

    if (!isUUID(id)) {
      return res.status(400).json({ message: "Produto não encontrado." })
    }

    const dto = new ProdutoUpdateDto()
    dto.id = id
    dto.name = name
    dto.price = price

    const errors = await validate(dto)

    if (errors.length > 0) {
      return res.status(422).json(errors)
    }
    try {
      const produtoUpd = await this.repo.update(dto);
      if (!produtoUpd) return res.status(400).json({ message: "Produto não encontrado." })
      return res.status(200).json(produtoUpd)
    } catch (error) {
      return res.status(500).json({message: "Erro ao atualizar." + error})
    }

  }

  delete = async (req: Request, res: Response) : Promise<Response> => {
    const id = String(req.params.id)

    if (!isUUID(id)) {
      return res.status(400).json({ message: "Produto não encontrado." })
    }

    let produto = await this.repo.getById(id)
    if (!produto) return res.status(400).json({ message: "Produto não encontrado." })

    try {
      await this.repo.destroy(id);
      return res.status(204).json({});
    } catch (error) {
      return res.status(500).json({ message: "Erro ao deletar produto." })
    }
  }

  findById = async (request:Request, response:Response) : Promise<Response> => {
    const id = String(request.params.id)

    if (!isUUID(id)) {
      return response.status(400).json({ message: "Produto não encontrado." })
    }

    const produto = await this.repo.getById(id)

    if (!produto) {
      return response.status(404).json({
        message: 'Produto não encontrado.'
      })
    }

    return response.status(200).json(produto)

  }
}

export default new ProdutoController()
