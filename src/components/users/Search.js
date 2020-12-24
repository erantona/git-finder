import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="">
        <form className="">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            className="bg-gray-100 m-3 px-2 h-8 rounded-sm shadow-md focus:bg-gray-200 w-60"
          />
          <input
            type="button"
            value="Search"
            className="inline-block bg-gray-900 rounded-sm text-white px-2 py-1 m-3 shadow-md hover:bg-gray-800 "
          />
        </form>
      </div>
    );
  }
}

export default Search;
