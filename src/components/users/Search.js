import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'bg-red-300');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="">
        <form
          className="mt-4 mx-auto max-w-3xl flex justify-center space-x-4"
          onSubmit={this.onSubmit}
        >
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            className=" px-2 h-12 w-64 rounded-md bg-white shadow-lg bg-opacity-25 bg-clip-padding outline-none text-black"
            style={{ backdropFilter: 'blur(20px)' }}
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="h-12 w-20 px-2 cursor-pointer rounded-md bg-gray-900 shadow-lg text-white  transition duration-500 ease-in-out hover:bg-gray-700 "
          />
          {this.props.showClear && (
            <button
              className="h-12 w-20 px-2 rounded-md bg-gray-900 shadow-lg text-white  transition duration-500 ease-in-out hover:bg-gray-700 "
              type="button"
              onClick={this.props.clearUsers}
            >
              clear
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default Search;
