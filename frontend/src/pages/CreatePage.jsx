import toast from 'react-hot-toast'
import { useState } from 'react'
import api from '../lib/axios.js'

const CreatePage = () => {
  const [newNote, setNewNote] = useState({ title: '', content: '' })
  const [isDisabled, setIsDisabled] = useState(false)

  const handleSubmit = async () => {
    try {
      setIsDisabled(true)
      if (!newNote.title.trim() || !newNote.title.trim()) {
        toast.error('All fields are required')
        return
      }
      const result = await api.post('/notes', newNote)
      console.log(result.data.message)
      toast.success('Note created successfully')
    } catch (_) {
      toast.error('Failed to create note')
    } finally {
      setIsDisabled(false)
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
        <button
          type='submit'
          className='btn btn-primary w-min self-end mt-1'
          disabled={isDisabled}
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default CreatePage
