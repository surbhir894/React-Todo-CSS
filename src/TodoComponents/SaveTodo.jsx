import React from 'react'

function SaveTodo({ todolist, setTodolist }) {
  const saveToDoList = (event) => {
    event.preventDefault();
    
    let todoname = event.target.todoname.value.trim();
    if (todoname === '') {

      alert("Task cannot be empty!");
      return;
    }
    
    if (!todolist.includes(todoname)) {
      setTodolist([...todolist, todoname]);
    } else {
      alert("Task already added!");
    }

    event.target.todoname.value = ''; // Clear input after submission
  }

  return (
    <>
      <div className='App'>
        <h1>To-do List</h1>
        <form onSubmit={saveToDoList}>
          <input type='text' name='todoname' />
          <button type='submit'>Save</button>
        </form>
      </div>
    </>
  )
}

export default SaveTodo;
