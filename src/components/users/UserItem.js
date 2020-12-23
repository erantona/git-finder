import React, { Component } from 'react';

class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      login: 'mojombo',
      avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo',
    };
  }
  render() {
    return (
      <div className=" p-4 m-3 border-2 border-blue-500 text-center">
        <img
          src={this.state.avatar_url}
          alt=""
          className="rounded-full m-auto"
          style={{ width: '100px' }}
        />
        <p className="font-semibold text-lg">{this.state.login}</p>
      </div>
    );
  }
}

export default UserItem;
