import "./style.css"

import Button from '@mui/material/Button';

function toDo ({todo, toggleTask, removeTask}) {
    return (
        
        <div key={todo.id} className="item-todo" style={{display:"flex", alignItems:"center", margin:"20px"}} >
            <div className={todo.complete ? "item-text strike" : "item-text"}
            onClick={() => toggleTask(todo.id)}>
                {todo.task}
            </div>
            
            <Button onClick={() => removeTask(todo.id)} variant="outlined" style={{marginLeft:"20px"}} >
        Complete
            </Button>  

            </div>
        
        
    )
}

export default toDo;