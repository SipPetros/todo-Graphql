import React from 'react';
import {useState} from "react";
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'
import Box from '@mui/material/Box';


function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
     
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
      todo.id === id ? {...todo, complete: !todo.complete} : {...todo }
      )
    ])
  }
   
  return (
    <div className='App' style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
      <h1>ToDo LIST</h1>
    <Box>
   <div className="search-bar" style={{margin:'20px', display:"flex", flexDirection:"row"}}>
   
   
   
      </div>
    </Box>
    <ToDoForm addTask={addTask} />
    {todos.map((todo) => {
      return (
        <ToDo 
        todo={todo}
        key={todo.id}
        toggleTask={handleToggle}
        removeTask={removeTask} 
        />
      )
    })}
    </div>
  );
}

export default App;
