import { IsNotEmpty, Length, IsPositive } from "class-validator"
import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity('products')
export class Product {

  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ type: "varchar", length: 60 })
  @IsNotEmpty()
  @Length(3, 255)
  name: string

  @Column({type: "decimal", precision: 15, scale: 2})
  @IsNotEmpty()
  @IsPositive()
  price: number

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp'
  })
  createdAt: Date
}
