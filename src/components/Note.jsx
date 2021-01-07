import React from "react";
// import notes from "../notes";
import InputArea from "./InputArea"


function Note(props) {

    function handleClick() {
         props.onDelete(props.id);
  
    }
    return (
        <div className="note" 
            // onClick={()=> {
            // props.onChecked(props.id);
            // }}
        >
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    );
}


export default Note;