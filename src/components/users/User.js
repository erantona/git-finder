import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getRepos(this.props.match.params.login);
  }

  render() {
    const {
      name,
      login,
      avatar_url,
      html_url,
      location,
      blog,
      email,
      bio,
      public_repos,
      public_gists,
      followers,
      following,
    } = this.props.user;
    const { loading } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <div className="grid grid-cols-2 ">
        <div className="flex flex-col justify-center items-center text-center">
          <Link to="/">
            <button type="button">Back to Search..</button>
          </Link>
          <h1>{name}</h1>
        </div>
      </div>
    );
  }
}

export default User;
