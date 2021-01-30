import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import InputArea from "./InputArea";
import NoteList from "./NoteList";
import axios from "axios";


function App() {
    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes(prevNotes => {
            return [...prevNotes, note];
        });

    }
    // function deleteNote(id) {
    //     console.debug('id:', id)
    //     axios.delete('http://localhost:5000/' + id)
    //         .then(res => console.log(res.data));

    //     setNotes(prevNotes => {
    //         return prevNotes.filter(note => {
    //             return note._id !== id;
    //         });
    //     });
    // }

    // function displayNotes(note) {
    //     return <Note key={note._id} title={note.title} content={note.content} />
    // }
    // function deleteNote(id) {
    //     setNotes(prevNotes => {
    //         return prevNotes.filter((note, index) => {
    //             return index !== id;
    //         });
    //     });
    // }

    return (
        <Router>
            <div>
                <Header />
                <InputArea onAdd={addNote} />
                <NoteList />

                <Footer />

            </div>
        </Router>);
}

export default App;