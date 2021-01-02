import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className=" ">
      <div className="py-6 m-10 text-center rounded-md bg-white dark:bg-gray-800 shadow-lg transform duration-100 hover:scale-105 hover:shadow-2xl">
        <img
          src={avatar_url}
          alt=""
          className="rounded-full m-auto  border-blue-200 border-4"
          style={{ width: '100px' }}
        />
        <p className="font-semibold pt-2 text-lg text-black dark:text-white">
          {login}
        </p>
        <div className="pt-4">
          <Link
            to={`/user/${login}`}
            className="inline-block bg-blue-800 rounded-sm text-white px-4 py-1 mt-3 hover:bg-blue-700  "
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.prototype = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
