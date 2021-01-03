import React, { useContext, useState } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div className="">
      <form
        className="mt-4 mx-auto max-w-3xl flex flex-col md:flex-row space-y-4 md:space-y-0 justify-center items-center space-x-4"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          className=" px-2 h-12 w-64 rounded-md bg-white dark:bg-gray-800 shadow-md outline-none text-black dark:text-blue-200 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-10 focus:shadow-xl hover:shadow-lg"
          style={{ backdropFilter: 'blur(20px)' }}
          value={text}
          onChange={onChange}
          autoComplete="off"
        />
        <div className="">
          <input
            type="submit"
            value="Search"
            className="h-12 w-20 px-2 mr-3 cursor-pointer rounded-md bg-blue-800 shadow-lg ease-in-out transform duration-100 hover:bg-blue-700 hover:text-gray-100 hover:scale-95  text-gray-200 font-semibold"
          />
          {githubContext.users.length > 0 && (
            <button
              className="h-12 w-20 px-2 rounded-md bg-blue-800 shadow-lg ease-in-out transform duration-100 hover:bg-blue-700 hover:text-gray-100 hover:scale-95  text-gray-200 font-semibold"
              type="button"
              onClick={githubContext.clearUsers}
            >
              Clear
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
