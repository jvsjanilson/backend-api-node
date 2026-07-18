import dotenv from 'dotenv'
import express from 'express'


dotenv.config()

import "./connection.js"

const PORT = process.env.PORT || 8080

const app = express()

app.get('/', (request, response) => {
    response.send("Server up")
})

app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`)
})
