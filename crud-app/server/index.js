const express = require('express');
const low = require('lowdb');
const cors = require('cors')
const FileSync = require('lowdb/adapters/FileSync');
const usersHandler = require('./usersHandler.js');

const adapter = new FileSync('data.json');
const db = low(adapter);

const app = express();
const port = 7070;

app.use(express.json());
app.use(cors());

app.get('/users', usersHandler);

app.post('/users', (request, response) => {
  const user = request.body;

  if (user && user.name && user.name.length > 0) {
    db.get('users')
      .push({
        ...user,
        createdAt: new Date()
      })
      .write();

    response.headers = {
      'Allow-access-origin': '*'
    }

    response.end();
  } else {
    response.status(400);
    response.send('Please provide object with name');
  }
});

app.put('/users/:id', (request) => {
  db.get('users')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
