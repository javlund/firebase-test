import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'

class App extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: ''
    };
    this.saveUser = this.saveUser.bind(this);
  }

  componentWillMount() {
    const { firestore } = this.context.store;
    //firestore.get('users');
    firestore.onSnapshot( { collection: 'users'}, snapshot => console.log(snapshot) );
  }

  saveUser() {
    const { firstName, lastName } = this.state;
    const { firestore } = this.context.store;
    firestore.add('users', { firstName, lastName });
    this.setState({ firstName: '', lastName: '' });
  }

  render() {
    const { users } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {users && users.map(user => 
          <p key={user.id}>{user.firstName} {user.lastName}</p>
        )}
        <label>Fornavn <input type="text" value={this.state.firstName} onChange={event => this.setState({firstName: event.target.value})} /></label>
        <label>Efternavn <input type="text" value={this.state.lastName} onChange={event => this.setState({lastName: event.target.value})} /></label>
        <button onClick={this.saveUser}>Tilføj</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.firestore.ordered.users
  };
};

export default connect(mapStateToProps)(App);