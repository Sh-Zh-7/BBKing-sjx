const express = require('express');
const sqlite3 = require('sqlite3');

const app = express();
const db = new sqlite3.Database('bible.db');

app.get('/saying', (_, response) => {
  db.get("SELECT COUNT(*) AS count FROM bible", (err, result) => {
    if (err) throw err;
    const rowNum = result.count;
    const randomID = Math.floor(Math.random() * rowNum);
    db.get(`SELECT sayings FROM bible WHERE ID = ${randomID}`, (err, result) => {
      if (err) throw err;
      response.end(result.sayings);
    })
  })
})

module.exports = app
