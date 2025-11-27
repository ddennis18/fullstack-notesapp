import Note from '../models/Note.js'

export async function getAllNotes ( _ , res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }) //show the latest first
    res.status(200).json(notes)
  } catch (error) {
    console.log('error in get notes function', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

export async function getNote (req, res) {
  try {
    const note = await Note.findById(req.params.id)
    if (!note) {
      return res.status(404).json({ message: 'Note Not Found' })
    }
    res.status(200).json(note)
  } catch (error) {
    console.log('error in get note function', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

export async function createNote (req, res) {
  try {
    const { title, content } = req.body
    const newNote = new Note({ title, content })

    await newNote.save()
    res.status(201).json({ message: 'note created successfully' })
  } catch (error) {
    console.log('error in create notes function', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

export async function updateNote (req, res) {
  try {
    const { title, content } = req.body
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    )

    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found' })
    }

    res.status(200).json({ message: 'note updated successfully' })
  } catch (error) {
    console.log('error in updateing notes function', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

export async function deleteNote (req, res) {
  try {
    const deleteNote = await Note.findByIdAndDelete(req.params.id)

    if (!deleteNote) {
      return res.status(404).json({ message: 'Note not found' })
    }
    res.status(200).json({ message: 'note deleted successfully' })
  } catch (error) {
    console.log('error in delete notes function', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
