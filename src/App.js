import './assets/main.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await Axios.get(
      `https://api.github.com/users?clint_id=${process.env.REACT_GITHUB_CLIENT_ID}
      &clint_secret=${process.env.REACT_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className="app">
        <Navbar title="Git Finder" icon="fab fa-github" />
        <div className="container m-auto">
          <Search />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
