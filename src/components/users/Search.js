import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="">
        <form className="m-auto">
          <div className="m-3 flex justify-center items-center space-x-6">
            <input
              type="text"
              name="text"
              placeholder="Search Users..."
              className=" px-2 h-12 w-96 rounded-md bg-white shadow-lg bg-opacity-25 bg-clip-padding outline-none text-black"
              style={{ backdropFilter: 'blur(20px)' }}
            />
            <input
              type="button"
              value="Search"
              className="h-12 w-20 px-4 py-1 inline-block  bg-gray-900 rounded-md text-white shadow-md hover:bg-gray-800 cursor-pointer"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
