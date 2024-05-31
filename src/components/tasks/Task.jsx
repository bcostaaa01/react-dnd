import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

export const Task = ({ id, title }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  return (
    <div 
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={{
            transition,
            transform: CSS.Transform.toString(transform),
        }}
        className='flex flex-row items-center p-2 m-1 bg-white border-b border-gray-300 text-black'
    >
        <input 
            type='checkbox' 
            className='mr-2 animate-checkbox' 
        />
        <span className='text-lg font-medium title'>{title}</span>
    </div>
  )
}
