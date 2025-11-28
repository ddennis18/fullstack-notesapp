import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'

import { notesRouter } from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'

dotenv.config()
const __dirname = path.resolve()

//setup the app
const app = express()

//connect to mongo DB
connectDB()
const port = process.env.PORT

// use cases for middle ware
// auth check

if (process.env.NODE_ENV !== 'production') {
  app.use(cors())
}

//json middleware so we can access json in the body
app.use(express.json())

//set the router for the notes
app.use('/api/notes', notesRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist'))
  })
}

app.listen(port, () => {
  console.log('Server running on port', port)
})
