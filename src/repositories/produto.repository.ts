import AppDataSource from "@/database/connection.js";
import type ProdutoCreateDto from "@/dtos/create.produto.js";
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

}
