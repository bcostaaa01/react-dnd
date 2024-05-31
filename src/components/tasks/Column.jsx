import React from 'react'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Task } from './Task'
import { Input } from '../UI/Input'

export const Column = ({ tasks }) => {
  return (
    <div className='flex flex-col bg-gray-200 p-2'>
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map(task => (
            <Task key={task.id} id={task.id} title={task.title} />
        ))}
        </SortableContext>
    </div>
  )
}
