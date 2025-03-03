import { useState } from 'react'
import { Heading } from './components/UI/Heading'
import { DndContext, closestCorners, useSensors, useSensor, TouchSensor, KeyboardSensor, PointerSensor } from '@dnd-kit/core'
import './App.css'
import { Column } from './components/tasks/Column'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { Input } from './components/UI/Input'

function App() {
  const [ tasks, setTasks ] = useState([
    { id: 1, title: 'Clean the house' },
    { id: 2, title: 'Buy groceries' },
    { id: 3, title: 'Cook dinner' },
  ])

  const getTask = (id) => tasks.findIndex(task => task.id === id)

  const handleDragEnd = ({ active, over }) => {
    if (active.id === over.id) return;
    
    setTasks((tasks) => {
      const oldIndex = getTask(active.id)
      const newIndex = getTask(over.id)
      
      return arrayMove(tasks, oldIndex, newIndex)
    })  
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <>
      <div className='flex flex-col h-full w-full'>
        <div className='relative h-20'>
          <Heading title="Your todos ✅" />
        </div>
        <div className='relative flex-grow overflow-auto p-4'>
          <Input onAddTask={(title) => setTasks([...tasks, { id: tasks.length + 1, title }])} />
          <div className="w-full max-w-full">
            <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd} sensors={sensors}>
              <Column tasks={tasks} />
            </DndContext>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
