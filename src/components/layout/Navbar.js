import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  static defaultProps = {
    title: 'Navbar',
    icon: 'fas fa-plug',
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
  render() {
    return (
      <nav className="w-screen bg-blue-500 p-4 pl-6 text-white text-2xl">
        <h1>
          <i className={this.props.icon} />
          <span className="pl-2">{this.props.title}</span>
        </h1>
      </nav>
    );
  }
}

export default Navbar;
