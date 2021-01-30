const router = require('express').Router();
let Note = require('../models/notes.model');

//first route that handles incoming http get requests
//mongoose method find() will find all the notes from the mongodb atlas DB
router.route("/").get((req, res) => {
    Note.find()
        .then(notes => res.json(notes))
        .catch(err => res.status(400).json('Error: ' + err));
});

// second end point handles add request
router.route('/add').post((req, res) => {
    console.log('in add route res:', res)
    const title = req.body.title;
    const content = req.body.content;

    const newNote = new Note({
        title,
        content
    });

    newNote.save()
        .then(() => res.json('Note added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    Note.findById(req.params.id)
        .then(note => res.json(note))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res) => {
    Note.findByIdAndDelete(req.params.id)
        .then(() => res.json("Note deleted."))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Note.findById(req.params.id)
        .then(note => {
            note.title = req.body.title;
            note.content = req.body.content;

            note.save()
                .then(() => res.json('Note updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
