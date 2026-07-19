import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

dotenv.config()

import "@/database/connection.js"
import routers from '@/routes/index.js'

const PORT = process.env.PORT || 8080

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(routers)


app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`)
})
