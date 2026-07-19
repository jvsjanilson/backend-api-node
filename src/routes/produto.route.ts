import { Router } from "express"
import produtoController from "@/controllers/produto.controller.js"

const produtoRoutes = Router()

produtoRoutes.get('/', produtoController.findAll)
produtoRoutes.get('/:id', produtoController.findById)
produtoRoutes.post('/', produtoController.create)
produtoRoutes.put('/:id', produtoController.update)
produtoRoutes.delete('/:id', produtoController.delete)

export default produtoRoutes
