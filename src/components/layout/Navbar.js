import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className="w-screen bg-blue-500 p-4 pl-6 text-white text-2xl">
      <h1>
        <i className={icon} />
        <span className="pl-2">{title}</span>
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
