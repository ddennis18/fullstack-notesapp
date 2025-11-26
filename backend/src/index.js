import express from 'express'
import { notesRouter } from './routes/notesRoutes.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT;

console.log(port)

app.use('/api/notes', notesRouter)

app.listen(port, ()=>{
  console.log("Server running on port", port)
})
