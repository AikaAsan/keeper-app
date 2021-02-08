import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import InputArea from "./InputArea";
import NoteList from "./NoteList";
import axios from "axios";


function App() {

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