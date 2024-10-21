import React from 'react'
import TodoListItems from './TodoListItems'

function ShowTodo({ todolist ,setTodolist }) {
  return (
    <>
      <div className='outerDiv'>
        <ul>
          {todolist.map((value, index) => (
            <TodoListItems key={index} value={value} indexnumber={index} todolist={todolist} setTodolist={setTodolist}/>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ShowTodo;
