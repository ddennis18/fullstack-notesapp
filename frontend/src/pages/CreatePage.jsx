import axios from 'axios'
import { useState } from 'react'

const CreatePage = () => {
  const [newNote, setNewNote] = useState({ title: '', content: '' })

  const handleSubmit = async () => {
    try {
      const result = await axios.post(
        'http://localhost:5001/api/notes/',
        newNote
      )
      console.log(result.data.message)
    } catch (error) {
      console.log('error creating note', error)
    }
  }

  return (
    <div className='flex justify-center items-center mt-6'>
      <form
        className='flex flex-col gap-1 w-[90%] md:w-[60%]'
        onSubmit={e => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <label htmlFor='' className='floating-label'>
          Title:
        </label>
        <input
          type='text'
          name='title'
          id='title'
          className='input w-full'
          placeholder='Enter the tilte for the note'
          onChange={e => setNewNote({ ...newNote, title: e.target.value })}
        />
        <label htmlFor='content' className='label'>
          Content:
        </label>
        <textarea
          type='text'
          name='title'
          id='title'
          className='textarea w-full min-h-50'
          placeholder='Enter content for the note'
          onChange={e => setNewNote({ ...newNote, content: e.target.value })}
        />
        <button type='submit' className='btn btn-primary w-min self-end'>
          Send
        </button>
      </form>
    </div>
  )
}

export default CreatePage
