import './assets/main.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import Search from './components/users/Search';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';

class App extends Component {
  state = {
    users: [],
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
    console.log(text);
    this.setState({ loading: true });
    const res = await Axios.get(
      `https://api.github.com/search/users?q=${text}&clint_id=${process.env.REACT_GITHUB_CLIENT_ID}
      &clint_secret=${process.env.REACT_GITHUB_CLIENT_SECRET}`
    );
    console.log(res.data.items.length);
    this.setState({ users: res.data.items, loading: false });
  };
  clearUsers = () => this.setState({ loading: false, users: [] });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  };
  render() {
    return (
      <Router>
        <div className="">
          <Navbar title="Git Finder" icon="fab fa-github" />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <div className="container m-auto">
                    <Alert alert={this.state.alert} />
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      setAlert={this.setAlert}
                      showClear={this.state.users.length > 0 ? true : false}
                    />
                    <Users
                      loading={this.state.loading}
                      users={this.state.users}
                    />
                  </div>
                </Fragment>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
