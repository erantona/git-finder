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
  searchUsers = async (text) => {
    console.log(text);
    this.setState({ loading: true });
    const res = await Axios.get(
      `https://api.github.com/search/users?q=${text}&clint_id=${process.env.REACT_GITHUB_CLIENT_ID}
      &clint_secret=${process.env.REACT_GITHUB_CLIENT_SECRET}`
    );
    console.log(res);
    this.setState({ users: res.data.items, loading: false });
  };
  clearUsers = () => this.setState({ loading: false, users: [] });
  render() {
    return (
      <div className="w-screen">
        <Navbar title="Git Finder" icon="fab fa-github" />
        <div className="container m-auto">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
