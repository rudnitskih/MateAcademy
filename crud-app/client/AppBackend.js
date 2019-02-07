export class AppBackend {
  constructor() {
    this.baseUrl = this.isDevEnvironment() ? 'http://localhost:7070' : '4353456452.mockApi.com';
  }

  isDevEnvironment() {
    return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  }

  get({limit, page}) {
    let url = `${this.baseUrl}/users?`;

    if (page) {
      url += `page=${page}`;
    }


    return fetch(`${this.baseUrl}/users?page=${page}&limit=${limit}`)
      .then((response) => response.json());
  }

  create(user) {
    return fetch(`${this.baseUrl}/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
  }

  delete(id) {
    return fetch(`${this.baseUrl}/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }
}
