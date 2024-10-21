import React, { useState } from 'react'

function TodoListItems({ value ,indexnumber ,todolist ,setTodolist }) {
  let [status ,setStatus] =useState(false)
  let deleteRow =()=>{
    let finalData =todolist.filter((value,index)=>index!=indexnumber)
    setTodolist(finalData)
  }

  let checkStatus =()=>{
   setStatus(!status)
  }
  return (
    <>
      <li className={(status)? 'completetodo' : ''} onClick={checkStatus} >  {value} <span onClick={deleteRow}>&times;</span></li>
    </>
  )
}

export default TodoListItems;
