import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav
      className="w-screen p-4 pl-6 text-2xl font-semibold bg-white shadow-lg bg-opacity-25 bg-clip-padding"
      style={{ backdropFilter: 'blur(20px)' }}
    >
      <h1>
        <i className={icon} />
        <span className="pl-2 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-500">
          {title}
        </span>
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Navbar',
  icon: 'fas fa-plug',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
