import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

dotenv.config()

import "./connection.js"
import produtoController from '@/controllers/produto.controller.js'

const PORT = process.env.PORT || 8080

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/api/produtos', produtoController.findAll)
app.get('/api/produtos/:id', produtoController.findById)
app.post('/api/produtos', produtoController.create)
app.put('/api/produtos/:id', produtoController.update)
app.delete('/api/produtos/:id', produtoController.delete)


app.get('/', (request, response) => {
    response.send("Server up")
})

app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`)
})
