const notes = require('express').Router();
const {readFile, writeFile} = require('fs').promises;
const { v4: uuidv4} = require('uuid');

notes.get('/', (req, res) => {
    readFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    readFile('./db/db.json').then( (data) => {
        return JSON.parse(data)
    }).then( (noteData) => {
        newNote = {
            id: uuidv4(),
            title: req.body.title,
            text: req.body.text
        }
        noteData.push(newNote)
        writeFile('./db/db.json', JSON.stringify(noteData))
    }).then (() => {
        res.send('')
    })
});

module.exports = notes;