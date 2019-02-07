const express = require('express');
const low = require('lowdb');
const cors = require('cors')
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('data.json');
const db = low(adapter);

const app = express();
const port = 7070;

app.use(express.json());
app.use(cors());

app.get('/users', (request, response) => {
  let {limit, page, search, order, sortBy} = request.query;

  limit = Number(limit);
  page = Number(page);

  let users = db.get('users');

  if (limit > 0 && page > 0) {
    users = users.value().slice((page * limit) - 1, (page + 1) * limit);
  }

  response.send(users);
});

app.post('/users', (request, response) => {
  const user = request.body;

  if (user && user.name && user.name.length > 0) {
    db.get('users')
      .push(user)
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
