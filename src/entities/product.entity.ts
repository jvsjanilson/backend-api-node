import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { v4 as uuid } from "uuid"


@Entity('products')
export class Product {

  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ type: "varchar", length: 60 })
  name: string

  @Column({type: "decimal", precision: 15, scale: 2})
  price: number

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp'
  })
  createdAt: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
