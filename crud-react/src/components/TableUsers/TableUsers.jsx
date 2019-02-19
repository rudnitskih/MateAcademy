import {Table} from "react-bootstrap";
import React from "react";
import {UserRow} from "../UserRow/UserRow";
import {TableHeaderCell} from "../TableHeaderCell/TableHeaderCell";

const users = [
  {
    id: '1',
    name: 'Dmytro',
    email: 'rudnitskih@gmail.com'
  },
  {
    id: '2',
    name: 'Ivan',
    email: 'rudnitskih@gmail.com'
  },
  {
    id: '3',
    name: 'Petro',
    email: 'rudnitskih@gmail.com'
  }
];

export const TableUsers = () => {
  return (
    <Table striped bordered hover>
      <thead>
      <tr>
        <TableHeaderCell title="#" order="desc"/>
        <TableHeaderCell title="First Name" order="asc"/>
        <TableHeaderCell title="Email"/>
        <td>Actions</td>
      </tr>
      </thead>
      <tbody>
      {
        users.map((user, index) => {
          return <UserRow {...user} mode={index % 2 ? 'edit' : 'view' } key={user.id}/>;
        })
      }
      </tbody>
    </Table>
  );
};
