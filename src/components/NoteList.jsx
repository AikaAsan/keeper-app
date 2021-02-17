import React, { Component } from "react";
import axios from "axios";
import Note from "./Note";
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import InputArea from "./InputArea";
// const Note = props => (
//     <div className="note">
//         <h1>{props.title}</h1>
//         <p>{props.content}</p>
//         <button onClick={() => { props.onDelete(props.id) }}>
//             <DeleteIcon />
//         </button>
//     </div>
// )

export default class NoteList extends Component {
    constructor(props) {
        super(props);
        //not sure what bind means. Also I already have deleteNote function in App.jsx
        this.deleteNote = this.deleteNote.bind(this);
        this.addNote = this.addNote.bind(this);
        this.state = {
            notes: []
        };
    }

    componentDidMount() {
        axios.get('/note')
            .then(response => {
                this.setState({ notes: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteNote(id) {
        console.debug('id:', id)
        //delete note with id from database
        axios.delete('/note/' + id)
            .then(response => {
                console.log(response.data)
            });
        //set new state
        this.setState({
            notes: this.state.notes.filter(singleNote => {
                return singleNote._id !== id
            })
        })
    }

    noteList() {
        return this.state.notes.map(singleNote => {
            return <Note
                key={singleNote._id}
                id={singleNote._id}
                title={singleNote.title}
                content={singleNote.content}
                onDelete={this.deleteNote}
            />
        })
    }

    async addNote(note) {
        await axios.post('/note/add', note)

        axios.get('/note')
            .then(response => {
                this.setState({ notes: response.data })
            })
            .catch((error) => {
                console.log(error);
            })

    }
    render() {
        return (
            <div>
                <InputArea onAdd={this.addNote} />
                {this.noteList()}
            </div>
        )
    }
}

