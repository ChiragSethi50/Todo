import React from "react";
import { useState } from "react";
import '../App.css'
import {Button} from '@mui/material'

function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <div className="editing">
        <form onSubmit={handleSubmit} className="edit-form">
      <div >
        {/* <label htmlFor={props.id}>Editing</label> */}
        <input
          id={props.id}
          className="edit-input"
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
      
        
        <Button className="cancel-btn" type="button" variant="contained" onClick={() => setEditing(false)}>cancel</Button>
        <Button type="submit" className="save-btn" variant="contained">Save</Button>
     </div>
    </form>
    </div>
  );

  const viewTemplate = (
    <div className="view">
      <div className="task">
        <input
          id={props.id}
          type="checkbox"
          className="check"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
          
        />
        <label htmlFor={props.id} className="">{props.name}</label>
      </div>
      <div className="btn-group">

      <Button variant="contained" className="edit-btn" type="button" onClick={() => setEditing(true)}>Edit</Button>
        
        <Button variant="contained" className="delete-btn css-sghohy-MuiButtonBase-root-MuiButton-root" type="button" onClick={() => props.deleteTask(props.id)}>Delete</Button>
        
      </div>
    </div>
  );

  return (
    <>
      <li className="output">{isEditing ? editingTemplate : viewTemplate}</li>
    </>
  );
}

export default Todo;
