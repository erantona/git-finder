import './assets/main.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import User from './components/users/User';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="">
            <div className="bg-gray-200 dark:bg-gray-900 pb-36 min-h-screen">
              <Navbar title="Git Finder" icon="fab fa-github" />
              <div className="sm:container m-auto text-white">
                <Alert />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/user/:login" component={User} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
