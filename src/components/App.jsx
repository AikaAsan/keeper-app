import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import NoteList from "./NoteList";
import axios from "axios";


function App() {

    return (
        <Router>
            <div>
                <Header />

                <NoteList />
                <Footer />

            </div>
        </Router>);
}

export default App;