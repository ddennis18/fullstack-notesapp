import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import { notesRouter } from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'

dotenv.config()

//setup the app
const app = express()

//connect to mongo DB
connectDB()
const port = process.env.PORT;

// use cases for middle ware
// auth check
// rate limiting

//json middleware so we can access json in the body
app.use(express.json())
app.use(cors())

//set the router for the notes
app.use('/api/notes', notesRouter)

app.listen(port, ()=>{
  console.log("Server running on port", port)
})
