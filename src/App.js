import './assets/main.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import About from './components/pages/About';
import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import Dummy from './Dummy';

const App = () => {
  const [users, setUsers] = useState(Dummy);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // const foo = async () => {
  //   const res = await Axios.get(
  //     `https://api.github.com/users?clint_id=${process.env.REACT_GITHUB_CLIENT_ID}
  //     &clint_secret=${process.env.REACT_GITHUB_CLIENT_SECRET}`
  //   );
  //   setLoading(false);
  //   setUsers(res.data.items);
  // };

  // useEffect(() => {
  //   // eslint-disable-next-line
  //   setLoading(true);
  //   foo();

  //   // eslint-disable-next-line
  // }, []);

  const searchUsers = async (text) => {
    setLoading(true);

    const res = await Axios.get(
      `https://api.github.com/search/users?q=${text}&clint_id=${process.env.REACT_GITHUB_CLIENT_ID}
      &clint_secret=${process.env.REACT_GITHUB_CLIENT_SECRET}`
    );
    setLoading(false);
    setUsers(res.data.items);
  };

  const getUser = async (userName) => {
    setLoading(true);

    const res = await Axios.get(
      `https://api.github.com/users/${userName}?clint_id=${process.env.REACT_GITHUB_CLIENT_ID}
      &clint_secret=${process.env.REACT_GITHUB_CLIENT_SECRET}`
    );
    setLoading(false);
    setUser(res.data);
  };

  const getRepos = async (userName) => {
    setLoading(true);

    const res = await Axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=6&sort=created:asc&clint_id=${process.env.REACT_GITHUB_CLIENT_ID}
      &clint_secret=${process.env.REACT_GITHUB_CLIENT_SECRET}`
    );

    setLoading(false);
    setRepos(res.data);
  };

  const clearUsers = () => {
    setLoading(false);
    setUsers([]);
  };

  const showAlert = (msg) => {
    setAlert({ msg: msg });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <Router>
      <div className="">
        <div className="bg-gray-200 dark:bg-gray-900 pb-36 min-h-screen">
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
                      searchUsers={searchUsers}
                      clearUsers={clearUsers}
                      showAlert={showAlert}
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
                    getUser={getUser}
                    user={user}
                    loading={loading}
                    getRepos={getRepos}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
