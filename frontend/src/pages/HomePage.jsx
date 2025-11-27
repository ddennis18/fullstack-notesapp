import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import toast from 'react-hot-toast'
import NoteCard from '../components/NoteCard'

const HomePage = () => {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/notes')
        setNotes(res.data)
      } catch (error) {
        toast.error('failed to load notes')
        console.log('error fetching notes', error)
      } finally {
        setLoading(false)
      }
    }

    fetchNotes()
  }, [])

  return (
    <div className='max-w-7xl mx-auto p-4 mt-6'>
      {loading && (
        <div className='text-center text-primary, py-10'>Loading Notes...</div>
      )}

      {notes.length > 0 && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {notes.map(n => {
            return <NoteCard key={n._id} note={n}></NoteCard>
          })}
        </div>
      )}
    </div>
  )
}

export default HomePage
