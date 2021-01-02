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
        className="pl-3 w-14 outline-none"
        value={repo.clone_url}
        ref={git}
        readOnly
      />
      <button className="pl-2 outline-white" onClick={copyToClipboard}>
        <i className="far fa-clipboard mx-auto outline-none"></i>
      </button>
    </div>
  );
};

RepoItem.prototype = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
