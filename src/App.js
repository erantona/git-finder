import './assets/main.css';
// import './assets/ref.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="Git Finder" icon="fab fa-github" />
        <UserItem />
      </div>
    );
  }
}

export default App;
