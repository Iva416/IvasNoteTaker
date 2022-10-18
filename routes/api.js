
const notes = require('express').Router();
const uuid = require('../helpers/uuid.js');
const { readAndAppend, readFromFile, deleteItem } = require('../helpers/Utils');

notes.get('/notes', (req,res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

notes.post('/notes', (req,res) => {
    const { title, text, } = req.body;

    const SaveNote = {
        title,
        text,
        id : uuid()
    };
if (req && req.body) {
    readAndAppend(SaveNote, './db/db.json');
    res.json("Note Saved!");
} else {
    res.json({
        message: 'Your note could not be saved'
    });
}
})
notes.delete('/notes/:id', (req, res) => {
    deleteItem(req.params.id, './db/db.json')
    res.sendStatus(204);
})

module.exports = notes;