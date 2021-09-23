import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import "./style.css"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function ToDoForm ({addTask}) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    const handleKeyPress = () => {
        
    }

    return (
        <form onSubmit={handleSubmit} >
        <TextField
          
          label="I have to..."
          type="text"
          variant="standard"
          value={userInput}
                
          onChange = {handleChange}
          onKeyDown = {handleKeyPress}
                
          style={{width:"500px"}}
        />
         
        <Fab onClick={handleSubmit} size="medium" color="primary" aria-label="add" className="add" style={{marginLeft:"20px"}}>
        <AddIcon />
      </Fab>
        </form>
    )
}

export default ToDoForm;