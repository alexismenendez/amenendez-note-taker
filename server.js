const express = require('express');
const fs = require('fs');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));

//Homepage Route
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//Note Page Route
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//Deployment
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
