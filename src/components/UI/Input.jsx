import React from 'react'

export const Input = ({ onAddTask }) => {
    const [inputValue, setInputValue] = React.useState('')

    const handleSubmit = (e) => {
        setInputValue(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onAddTask(inputValue)
            setInputValue('')
        }
    }

  return (
    <div>
        <input 
            type='text' 
            value={inputValue} 
            onChange={handleSubmit}
            onKeyDown={handleKeyDown}
            className='p-2 m-1 bg-white rounded-md border-gray-300 text-black inputField'
        />
        <button 
            onClick={() => onAddTask(inputValue)} 
            className='p-2 m-1 bg-blue-500 text-white rounded-full inputButton'
        >Submit</button>
    </div>
  )
}
