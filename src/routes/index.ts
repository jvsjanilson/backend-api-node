import { Router, type Request, type Response } from "express"

import produtoRoutes from "@/routes/produto.route.js"

const routers = Router()

routers.use('/api/produtos', produtoRoutes)

routers.get('/', (_: Request, response:Response) => {
    response.status(200).json({message: "Server up"})
})

routers.use((_: Request, response: Response) => {
  response.status(404).json({ message: "Not Found" })
})
export default routers
