import AppDataSource from "@/database/connection.js";
import type { ProdutoCreateDto, ProdutoUpdateDto } from "@/dtos/produto.dto.js";
import { Product } from "@/entities/product.entity.js";
import { Repository } from "typeorm";

export class ProdutoRepository {
  private repo: Repository<Product>

  constructor() {
    this.repo = AppDataSource.getRepository(Product)
  }

  async getAll(): Promise<Product[]> {
    return await this.repo.find()
  }

  async store(form: ProdutoCreateDto): Promise<Product> {
    const produto = new Product()
    produto.name = form.name
    produto.price = form.price
    return await this.repo.save(produto)
  }

  async getById(id: string): Promise<Product| null> {
    return await this.repo.findOneBy({id})
  }

  async destroy(id: string) {
    await this.repo.delete({id})
  }

  async update(form: ProdutoUpdateDto): Promise<Product | null> {
    const produto = await this.getById(form.id)

    if (!produto) return null

    produto.id = form.id
    produto.name = form.name
    produto.price = form.price
    return await this.repo.save(produto)
  }

}
