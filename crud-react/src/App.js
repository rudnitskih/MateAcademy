import React, {Component} from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import {Header} from "./components/Header";
import {TableUsers} from "./components/TableUsers/TableUsers";
import {AppBackend} from "./AppBackend";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      limit: 15
    };

    this.backend = new AppBackend();
  }

  async componentDidMount() {
    const users = await this.backend.get({limit: this.state.limit});

    this.setState({
      users
    });
  }

  onSelectChange = async (event) => {
    const limit = event.target.value;

    this.setState({limit});

    const users = await this.backend.get({limit});

    this.setState({
      users
    });
  };

  render() {
    return (
      <Container>
        <Header onSelectChange={this.onSelectChange} limit={this.state.limit}/>
        <TableUsers users={this.state.users}/>
      </Container>
    );
  }
}

export default App;
