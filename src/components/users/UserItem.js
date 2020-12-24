import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className=" p-4 m-3 border-2 bg-gray-100 rounded-md shadow-md text-center">
      <img
        src={avatar_url}
        alt=""
        className="rounded-full m-auto"
        style={{ width: '100px' }}
      />
      <p className="font-semibold text-lg">{login}</p>
      <div className="">
        <a
          href={html_url}
          className="inline-block bg-gray-900 rounded-sm text-white px-2 py-1 mt-3 hover:bg-gray-800  "
        >
          More
        </a>
      </div>
    </div>
  );
};

UserItem.prototype = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
