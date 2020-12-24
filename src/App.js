import './assets/main.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="Git Finder" icon="fab fa-github" />
        <div className="container m-auto">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
