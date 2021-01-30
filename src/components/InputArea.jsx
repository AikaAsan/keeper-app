import React, { useState } from "react";
import axios from 'axios';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function InputArea(props) {

    const [isExpanded, setExpanded] = useState(false)

    const [note, setNote] = useState({
        id: "",
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        //connecting frontend to backend by causing frontend sending http requests to backend with the help of axois library

        //axios.post method will send http post request to the backend end point http://localhost:5000, the end point is expecting json object in the request body, we send it as a secont argument "note"
        axios.post('http://localhost:5000/add', note)
            .then(res => console.log(res.data));


        setNote({
            id: "",
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && (<input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />)}
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