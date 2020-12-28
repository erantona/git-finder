import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="">
        <form
          className="mt-3 flex justify-center items-center space-x-6 "
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
            className="h-12 w-20 px-2 inline-block font-semibold bg-gray-900 rounded-md text-white shadow-md hover:bg-gray-800 cursor-pointer"
          />
        </form>
        {this.props.showClear && (
          <button
            className="h-12 mt-2 w-20 ml-8 lg:ml-4 2xl:ml-8 inline-block font-semibold rounded-md shadow-md hover:bg-yellow-300 cursor-pointer bg-yellow-200"
            type="button"
            onClick={this.props.clearUsers}
          >
            clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
