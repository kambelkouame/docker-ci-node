const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Docker + CI/CD!');
});

module.exports = app; // exporte juste l'app, ne démarre pas le serveur ici