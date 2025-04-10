import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  const[task, setTask] = useState([])
  const[completed, setCompleted] = useState([])
  const[text, setText] = useState()
  const[cb, setCb] = useState(false)

  const deleteTask = (place) =>{
      task.splice(place,1)
      setTask([...task])
  }

  const completeTheTask = (place) =>{

    setTimeout(()=>{
      let t = task.splice(place,1)
      setCompleted([...completed,t])
      setCb(false)
      setTask([...task])
    },500)

}


  return (
    <>
        <div className='container'>
          <div>
              <h1 id='heading'>To Do App..</h1>
          </div>
            

            <div className='child1'>
              <input 
              type='text' 
              id='inp-box'
              value={text}
              onChange={(event)=>{setText(event.target.value)}}
              />

              <button id='btn' onClick={()=>{
                let t = text.trim()
                if(t==''){
                  alert("Cant't add empty task")
                }
                else{
                  setTask([...task,t])
                }
                
                setText('')
              }}>Add Task</button>
            </div>

            <div className='child2'>
              <div className='ongoing'>
                  <h1>Ongoing Task</h1>

                  {task.map((item,index)=><div className='rendered-tasks'>

                    <input type='checkbox'
                    checked={cb}
                    onChange={()=>{completeTheTask(index)}}
                    />

                    <li key={index}>{item}</li>
                    <img src="/edit.png" 
                    onClick={()=>{
                      let upated_value = prompt("Previously: "+task[index])
                      task.splice(index,1,upated_value)
                      setTask([...task])
                    }}
                    />
                    <img id={index} src="./delete.png" width="50" onClick={()=>{deleteTask(index)}}/>
                    
                    </div>)}
              </div>

              <div className='completed'>
                  <h1>Completed Task</h1>
                  {completed.map((item, index)=><li key={index}>{item}</li>)}
              </div>
            </div>
        </div>
    </>
  )
}

export default App