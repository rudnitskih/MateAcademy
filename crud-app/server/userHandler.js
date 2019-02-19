const usersHandler = (request, response) => {
  let {limit, page, search, order, sortBy} = request.query;

  limit = Number(limit);
  page = Number(page);

  let users = db.get('users');

  if (limit > 0 && page > 0) {
    users = users.value().slice((page * limit) - 1, (page + 1) * limit);
  }

  response.send(users);
};

module.exports = usersHandler;
