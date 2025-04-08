import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  const[task, setTask] = useState(["Learn React"])
  const[completed, setCompleted] = useState(["Learn React"])


  return (
    <>
        <div className='container'>
            <h1 id='heading'>To Do App</h1>

            <div className='child1'>
              <input type='text' id='inp-box'/>
              <button id='btn'>Add Task</button>
            </div>

            <div className='child2'>
              <div className='ongoing'>
                  <h1>Ongoing Task</h1>

                  {task.map((item)=><li>{item}</li>)}
              </div>

              <div className='completed'>
                  <h1>Completed Task</h1>
                  {completed.map((item)=><li>{item}</li>)}
              </div>
            </div>
        </div>
    </>
  )
}

export default App