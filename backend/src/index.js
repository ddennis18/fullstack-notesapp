import express from 'express'
import { notesRouter } from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
connectDB()
const port = process.env.PORT;

//json middleware so we can access json in the body
app.use(express.json())

app.use('/api/notes', notesRouter)

app.listen(port, ()=>{
  console.log("Server running on port", port)
})
