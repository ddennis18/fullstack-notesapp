import express from 'express'
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote
} from '../controllers/notesControllers.js'

export const notesRouter = express.Router()

//retriev note
notesRouter.get('/', getAllNotes)

//create note
notesRouter.post('/', createNote)

//update note
notesRouter.put('/:id', updateNote)

//delete note
notesRouter.delete('/:id', deleteNote)
