import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="mt-4 mx-2 md:mx-4 sm:mx-3 grid gap-2 sm:gap-3 md:gap- md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.prototype = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
