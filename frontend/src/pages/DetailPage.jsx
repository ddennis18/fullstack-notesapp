import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'
import api from '../lib/axios.js'
import { Link, useNavigate, useParams } from 'react-router'
import { ArrowLeft, LoaderIcon } from 'lucide-react'

const DetailPage = () => {
  const [note, setNote] = useState({ title: '', content: '' })
  const [isDisabled, setIsDisabled] = useState(false)
  const [loadingState, setLoadingState] = useState(true)
  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`)
        setNote(res.data)
        toast.success('node fetched')
      } catch (error) {
        console.log(error)
        toast.error('failed to fetch node')
      } finally {
        setLoadingState(false)
      }
    }
    fetchNote()
  }, [id])

  const handleSubmit = async () => {
    try {
      setIsDisabled(true)
      if (!note.title.trim() || !note.title.trim()) {
        toast.error('Add a title and content')
        return
      }
      await api.put(`/notes/${id}`, note)
      toast.success('Successfully Updated')
    } catch (error) {
      console.log(error)
      toast.error('failed to update')
    } finally {
      setIsDisabled(false)
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    if(!window.confirm("Are You Sure you want to dlete this note?")) return;
    
    try {
      await api.delete(`/notes/${id}`)
      toast.success('Deleted note successfully')
      navigate('/')//navigate the user back to the home page
    } catch (error) {
      console.log(error)
      toast.error('Failed to delete note')
    }
  }

  if (loadingState) {
    return (
      <div className='min-h-screen w-full flex justify-center items-center gap-4'>
        <Link to='/' className='link w-fit'>
          <ArrowLeft className='inline-block size-4' /> Back to Homepage
        </Link>
        <h2>
          <LoaderIcon className='animate-spin size-6' />
        </h2>
      </div>
    )
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
        <Link to='/' className='link w-fit'>
          <ArrowLeft className='inline-block size-4' /> Back to Homepage
        </Link>
        <label htmlFor='' className='floating-label'>
          Title:
        </label>
        <input
          type='text'
          name='title'
          id='title'
          value={note.title}
          className='input w-full'
          placeholder='Enter the tilte for the note'
          onChange={e => setNote({ ...note, title: e.target.value })}
        />
        <label htmlFor='content' className='label'>
          Content:
        </label>
        <textarea
          type='text'
          name='content'
          id='content'
          defaultValue={note.content}
          className='textarea w-full min-h-50'
          placeholder='Enter content for the note'
          onChange={e => setNote({ ...note, content: e.target.value })}
        >
        </textarea>
        <div className='self-end mt-1 space-x-2'>
          <button
            className='btn btn-error w-min'
            disabled={isDisabled}
            onClick={(e)=>handleDelete(e)}
          >
            Delete
          </button>
          <button
            type='submit'
            className='btn btn-primary w-min'
            disabled={isDisabled}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  )
}

export default DetailPage
