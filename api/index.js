const express = require('express');
const sqlite3 = require('sqlite3');

const app = express();
const db = new sqlite3.Database('bible.db');

app.get('/saying', (_, response) => {
  const offset = 5;
  db.get("SELECT COUNT(*) AS count FROM bible", (err, result) => {
    if (err) throw err;
    const rowNum = result.count;
    const randomID = Math.floor(Math.random() * rowNum);
    const startID = randomID > offset? randomID - offset : 1;
    db.all(`SELECT sayings FROM bible LIMIT ${offset} OFFSET ${startID}`, (err, result) => {
      if (err) throw err;
      response.json(result);
    })
  })
})

module.exports = app
