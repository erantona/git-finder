import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// const copy = require('clipboard-copy');

const RepoItem = ({ repo }) => {
  const git = useRef(null);

  function copyToClipboard(e) {
    git.current.select();
    document.execCommand('copy');
    e.target.focus();
  }

  return (
    <div className="text-blue-800 text-center text-lg font-bold p-6 border-b-4">
      <a href={repo.html_url} className="text-xl" target="_blank">
        {repo.name}
      </a>
      <input
        type="text"
        className="pl-3 font-bold w-4 outline-none text-2xl"
        value={repo.clone_url}
        placeholder="clone"
        ref={git}
        readOnly
      />
      <button
        className="pl-2 outline-none focus:outline-none"
        onClick={copyToClipboard}
      >
        {' '}
        Clone:{' '}
        <i className="far fa-clipboard mx-auto outline-none text-gray-800 "></i>
      </button>
    </div>
  );
};

RepoItem.prototype = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
