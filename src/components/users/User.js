import React, { Component } from 'react';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
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
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}

export default User;
