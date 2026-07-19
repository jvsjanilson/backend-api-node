import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "@/entities/product.entity.js"


const AppDataSource = new DataSource({
  type: "postgres",
  host: "127.0.0.1",
  port: 5432,
  username: "admin",
  password: "admin",
  database: "dbdados",
  synchronize: true,
  logging: true,
  //entities: ["src/**/*.entity.ts"],
  entities:[Product],
  subscribers: [],
  migrations: []
})

AppDataSource.initialize()
  .then(() => console.log('connected'))
  .catch((e) => console.error(e))

export default AppDataSource
