import {useState} from 'react'

function ToDoList(){
  const [taskList,setTaskList] = useState(['create header','create input','view task'])
  const [newTask,setNewTask] = useState('')

  function handleInputChange(event){
    setNewTask(event.target.value)
  }
  function addTask(){
    if (newTask.trim() !== ""){
      setTaskList(task => [newTask,...task])
      setNewTask("")
    }
  }
  function deleteTask(index){
    setTaskList(tList => tList.filter((_,i) => i !== index))
  }
  function moveTaskUp(index){
    const updatedList = [...taskList]
    if (index > 0){
      [updatedList[index],updatedList[index-1]] = [updatedList[index-1],updatedList[index]]
      setTaskList(updatedList)
    }
  }
  function moveTaskDown(index){
    const updatedList = [...taskList]
    if (index < updatedList.length - 1){
      [updatedList[index],updatedList[index+1]] = [updatedList[index+1],updatedList[index]]
      setTaskList(updatedList)
    }
  }
  return (
    <div className='to-do-list'>
      <h1>To-Do-List</h1>
      <div className='input-group'>
        <input type="text"
        value={newTask}
        placeholder='Enter New Task'
        onChange={handleInputChange} />
        <button className='btn' onClick={addTask}>Add Task</button>
      </div>
      <ol className='task-list'>
        {taskList.map((task,index) => 
        <li key={index}>
          <span className='text'>{task}</span> 
          <div className='btn-group'>
          <button className='delete-btn' onClick={() => deleteTask(index)}>&#x2715;</button>
          <button className='move-up-btn' onClick={() => moveTaskUp(index)}>&uarr;</button>
          <button className='move-down-btn' onClick={() => moveTaskDown(index)}>&darr;</button>
          </div>
        </li>)}
      </ol>
    </div>
  )
}

export default ToDoList