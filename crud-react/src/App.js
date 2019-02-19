import React, {Component} from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import {Header} from "./components/Header";
import {TableUsers} from "./components/TableUsers/TableUsers";

class App extends Component {
  render() {
    return (
      <Container>
        <Header/>
        <TableUsers/>
      </Container>
    );
  }
}

export default App;
