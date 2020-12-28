import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className=" ">
      <div
        className="py-6 text-center rounded-md bg-white shadow-lg bg-opacity-25 bg-clip-padding"
        style={{ backdropFilter: 'blur(20px)' }}
      >
        <img
          src={avatar_url}
          alt=""
          className="rounded-full m-auto"
          style={{ width: '100px' }}
        />
        <p className="font-semibold pt-2 text-lg">{login}</p>
        <div className="pt-4">
          <a
            href={html_url}
            className="inline-block bg-gray-900 rounded-sm text-white px-4 py-1 mt-3 hover:bg-gray-800  "
          >
            More
          </a>
        </div>
      </div>
    </div>
  );
};

UserItem.prototype = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
