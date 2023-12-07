const notes = require('express').Router();
const {readFile, writeFile} = require('fs').promises;
const { v4: uuidv4} = require('uuid');

notes.get('/', (req, res) => {
    readFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {

});

module.exports = notes;