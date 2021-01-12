import React, { useState } from "react";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function InputArea(props) {

    const [isExpanded, setExpanded] = useState(false)

    const[note, setNote] =useState({
        title:"",
        content:""
    });
    
    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        event.preventDefault();
        setNote({
        title:"",
        content:""
    });
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
               {isExpanded && ( <input
                type="text" 
                name="title"
                onChange={handleChange} 
                value={note.title}
                placeholder="Title"
                /> )}
                <textarea 
                name="content"
                onClick={expand}
                onChange={handleChange}
                value={note.content}
                placeholder="Take a note"
                rows={isExpanded ? 3 : 1}
                ></textarea>
               <Zoom in={isExpanded}>
                    <Fab
                    onClick={submitNote}
                    >
                        <NoteAddIcon />
                    </Fab>
               </Zoom>
                
           
                
            </form>
        </div>
            
         
        

    );
}

export default InputArea;