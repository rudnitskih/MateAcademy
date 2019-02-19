import {AppBackend} from "./AppBackend.js";

export class TableUsers {
  async init() {
    const backend = new AppBackend('https://5bf417c491c25b0013a3b9a2.mockapi.io');

    this.page = 1;
    this.users = await backend.get({});
    this.render();

    document.addEventListener('click', (e) => {
      if (e.target.matches('.delete-button')) {
        backend.delete(e.target.dataset.id);
      }
    });

    document.addEventListener('change', (e) => {
      if (e.target.matches('.search-input')) {
        backend.get(e.target.dataset.id);
      }

      this.page++;
      backend.get(e.target.dataset.id);
      this.render();
    });
  }

  renderUsers() {
    return this.users.map((user) =>
      `<tr>
          <th scope="row">${user.id}</th>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.createdAt}</td>
          <td>${user.description}</td>
          <td>
            <button type="button" class="btn btn-outline-danger" data-id="${user.id}">
              Delete
            </button>
          </td>
        </tr>
      `
    ).join('');
  }

  render() {
    document.querySelector('.container').innerHTML = `
      <table class="table table-striped table-sm">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">createdAt</th>
            <th scope="col">descriptio</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          ${this.renderUsers()}
        </tbody>
      </table>`;
  }
}
