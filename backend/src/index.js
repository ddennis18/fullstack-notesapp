//express to handle backend
import express from 'express'
//to handle cors issues. but wont be necessary in production bcos both would be on the same domain
import cors from 'cors'
//to import environment variables
import dotenv from 'dotenv'
//this will be required to serve the back end
import path from 'path'

//router for the notes api
import { notesRouter } from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'

dotenv.config()
//the current directory which is /backend
const __dirname = path.resolve()

//setup the app
const app = express()

//connect to mongo DB
connectDB()

//used for dev
const port = process.env.PORT

//only use cors in dev
//NODE_ENV is set in the .env file but when deploying we wont put it bcos render.com does it for us
if (process.env.NODE_ENV !== 'production') {
  app.use(cors())
}

//json middleware so we can access json in the body
app.use(express.json())

//set the router for the notes
app.use('/api/notes', notesRouter)

//serve the front end
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist'))
  })
}

//start the server
app.listen(port, () => {
  console.log('Server running on port', port)
})
