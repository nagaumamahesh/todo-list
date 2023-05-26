import React, {useState} from 'react'

export default function TodoForms(props) {

    const [input , setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    
    const handelSubmit = (e) => {
        e.preventDefault(); // for preventing whole page reloading when we submit the form
        props.addTask({
            id : Math.floor(Math.random()*10000),
            text : input,
            isComplete : false
        })
        setInput('')
    }

  return (
    <form className='todo-form'>
        <input type= 'text' placeholder='Add a todo' onChange={handleChange} className='Todo-input' value={input} name='text' />
        <button type='submit' onClick={handelSubmit} className='todo-btn'>Add TODO</button>
    </form>
  )
}

