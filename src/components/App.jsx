import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import InputArea from "./InputArea";



function App() {
    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes(prevNotes => {
            return [...prevNotes, note];
        });

    }
    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return (
        <Router>
            <div>
                <Header />
                <InputArea
                    onAdd={addNote} />
                {notes.map((singleNote, index) => {
                    return (
                        <Note
                            key={index}
                            id={index}
                            title={singleNote.title}
                            content={singleNote.content}
                            onDelete={deleteNote}
                        />
                    );
                })}
                <Footer />

            </div>
        </Router>);
}

export default App;