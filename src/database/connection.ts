import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "@/entities/product.entity.js"

import path from "path"
import { fileURLToPath } from "url"

// recria __filename e __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const AppDataSource = new DataSource({
  type: "postgres",
  host: "127.0.0.1",
  port: 5432,
  username: "admin",
  password: "admin",
  database: "dbdados",
  synchronize: true,
  logging: true,
  entities: [path.join(__dirname, "../entities/*.{ts,js}")],
  subscribers: [],
  migrations: []
})

AppDataSource.initialize()
  .then(() => console.log('connected'))
  .catch((e) => console.error(e))

export default AppDataSource
