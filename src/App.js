import React from 'react';
import {useState} from "react";
import './style.css'
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_TODOS } from './graphql/queries';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './graphql/mutations';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  //hooks
  const {data, loading} = useQuery(GET_TODOS);
  const[toggleTodo] = useMutation(TOGGLE_TODO);
  const[addTodo] = useMutation(ADD_TODO);
  const[deleteTodo] = useMutation(DELETE_TODO);

  // states
  const [userInput, setUserInput] = useState('')

// handle functions 
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
}

  async function handleAddTodo (event) {
    event.preventDefault();
    if(!userInput.trim())return; 
    const variables = {
      text: userInput
    }
    await addTodo({variables, 
      refetchQueries:[{query:  GET_TODOS}
      ]
    });
    setUserInput('')
    }
   
  async function handleDeleteTodo({id}){
   const variables = {
     id
   }

    await deleteTodo({variables, 
      refetchQueries:[{query:  GET_TODOS}
      ]
    })
  }

  async function handleToggleTodo({id, done}) {
    const variables = {
      id,
      done: !done
    }

    await toggleTodo({variables}, )
  }


  if (loading) return <div className={'loading'}> <CircularProgress /> </div>

  return (
    <div className='App' style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
 
      <h1>ToDo LIST</h1>
          
     <form onSubmit={handleAddTodo} >
        <TextField
          
          label="I have to..."
          type="text"
          variant="standard"
          value={userInput}
              
          onChange = {handleChange}
          
                          
          style={{width:"500px"}}
        />
         
        <Fab onClick={handleAddTodo} size="medium" color="primary" aria-label="add" className="add" style={{marginLeft:"20px"}}>
        <AddIcon />
      </Fab>
        </form>
         <div className={"item-text"}>
         {
          data.todos.map(todo => ( 
            <div className={"item-todo"}
             key={todo.id} onDoubleClick= {() => handleToggleTodo(todo)}>            <span className={` ${todo.done && "strike"}`}>{todo.text}</span>
            <Button onClick={() => handleDeleteTodo(todo)}  variant="outlined" style={{marginLeft:"20px"}} >
            Complete
           </Button> 
          
            </div>
           
          ))}

          </div>
          
    </div>
  );
      }

export default App;
