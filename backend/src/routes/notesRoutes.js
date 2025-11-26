import express from 'express'
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNote,
  updateNote
} from '../controllers/notesControllers.js'

export const notesRouter = express.Router()

//retrie all note
notesRouter.get('/', getAllNotes)

//retrie a specific note
notesRouter.get('/:id', getNote)

//create note
notesRouter.post('/', createNote)

//update note
notesRouter.put('/:id', updateNote)

//delete note
notesRouter.delete('/:id', deleteNote)
