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
            className=" px-2 h-12 w-64 rounded-md bg-gray-300 shadow-lg bg-opacity-25 bg-clip-padding outline-none text-black focus:ring-2 focus:ring-blue-600 focus:ring-opacity-10"
            style={{ backdropFilter: 'blur(20px)' }}
            value={this.state.text}
            onChange={this.onChange}
            autoComplete="off"
          />
          <input
            type="submit"
            value="Search"
            className="h-12 w-20 px-2 cursor-pointer rounded-md bg-gray-800 shadow-lg ease-in-out transform duration-100 hover:bg-gray-700 hover:text-gray-100 hover:scale-95  text-gray-200 font-semibold"
          />
          {this.props.showClear && (
            <button
              className="h-12 w-20 px-2 rounded-md bg-gray-800 shadow-lg ease-in-out transform duration-100 hover:bg-gray-700 hover:text-gray-100 hover:scale-95  text-gray-200 font-semibold"
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
