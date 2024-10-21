import React, { useState } from 'react'
import './App.css';


import ShowTodo from './TodoComponents/ShowTodo';
import SaveTodo from './TodoComponents/saveTodo';

function App() {

  const [todolist, setTodolist,] = useState([]);

  return (
    <>
      <SaveTodo todolist={todolist} setTodolist={setTodolist} />
      <ShowTodo todolist={todolist}setTodolist={setTodolist}/>

    </>
  )
}

export default App
