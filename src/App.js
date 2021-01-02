import './assets/main.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import About from './components/pages/About';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
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
    this.setState({ loading: true });

    const res = await Axios.get(
      `https://api.github.com/search/users?q=${text}&clint_id=${process.env.REACT_GITHUB_CLIENT_ID}
      &clint_secret=${process.env.REACT_GITHUB_CLIENT_SECRET}`
    );
    console.log(res.data.items.length);
    this.setState({ users: res.data.items, loading: false });
  };

  getUser = async (userName) => {
    this.setState({ loading: true });

    const res = await Axios.get(
      `https://api.github.com/users/${userName}?clint_id=${process.env.REACT_GITHUB_CLIENT_ID}
      &clint_secret=${process.env.REACT_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };

  getRepos = async (userName) => {
    this.setState({ loading: true });

    const res = await Axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=6&sort=created:asc&clint_id=${process.env.REACT_GITHUB_CLIENT_ID}
      &clint_secret=${process.env.REACT_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ repos: res.data, loading: false });
  };

  clearUsers = () => this.setState({ loading: false, users: [] });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  };

  render() {
    const { users, user, loading, alert, repos } = this.state;
    return (
      <Router>
        <div className="bg-gray-200 pb-36  min-h-screen">
          <Navbar title="Git Finder" icon="fab fa-github" />
          <div className="sm:container m-auto text-white">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Alert alert={alert} />
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      setAlert={this.setAlert}
                      showClear={users.length > 0 ? true : false}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                    getRepos={this.getRepos}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
