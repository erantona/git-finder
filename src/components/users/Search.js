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
          className="mt-4 mx-auto max-w-3xl flex flex-col md:flex-row space-y-4 md:space-y-0 justify-center items-center space-x-4"
          onSubmit={this.onSubmit}
        >
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            className=" px-2 h-12 w-64 rounded-md bg-white shadow-md outline-none text-black focus:ring-2 focus:ring-blue-600 focus:ring-opacity-10 focus:shadow-xl hover:shadow-lg"
            style={{ backdropFilter: 'blur(20px)' }}
            value={this.state.text}
            onChange={this.onChange}
            autoComplete="off"
          />
          <div className="">
            <input
              type="submit"
              value="Search"
              className="h-12 w-20 px-2 mr-3 cursor-pointer rounded-md bg-blue-800 shadow-lg ease-in-out transform duration-100 hover:bg-blue-700 hover:text-gray-100 hover:scale-95  text-gray-200 font-semibold"
            />
            {this.props.showClear && (
              <button
                className="h-12 w-20 px-2 rounded-md bg-blue-800 shadow-lg ease-in-out transform duration-100 hover:bg-blue-700 hover:text-gray-100 hover:scale-95  text-gray-200 font-semibold"
                type="button"
                onClick={this.props.clearUsers}
              >
                clear
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
