import { PenBoxIcon, Trash2Icon } from 'lucide-react'
import { Link } from 'react-router'
import formatDate from '../lib/utils'

const NoteCard = ({ note }) => {
  Trash2Icon
  return (
    <Link
      to={`/note/${note._id}`}
      className='card bg-base-200 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-primary'
    >
      <div className='card-body'>
        <h3 className='card-title text-base-content'>{note.title}</h3>
        <p className='text-base-content/80 line-clamp-4'>{note.content}</p>
        <div className='card-actions justify-between items-center mt-4'>
          <span className='text-sm text-base-content/60'>{formatDate(new Date(note.createdAt))}</span>
          <div className='flex items-center gap-1'>
            <PenBoxIcon className='size-4'/>
            <button className='btn btn-ghost btn-xs text-error'>
              <Trash2Icon className='size-4'></Trash2Icon>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NoteCard
