import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav
      className="p-4 pl-6 sm:text-lg bg-white shadow-sm dark:bg-gray-800 dark:text-blue-200 flex text-gray-800 font-semibold"
      style={{ justifyContent: 'space-between' }}
    >
      <h1 className="pl-2 font-bold text-2xl">
        <i className="fab fa-github-alt dark:text-blue-200" />
        <span className="pl-2">{title}</span>
      </h1>
      <ul className="flex space-x-3">
        <li className="sm:px-3 hover:text-gray-700 transform duration-100 hover:scale-95 hover:bg-gray-300 hover:shadow-inner sm:rounded-full">
          <Link to="/">Home</Link>
        </li>
        <li className="sm:px-3 hover:text-gray-700 transform duration-100 hover:scale-95 hover:bg-gray-300 hover:shadow-inner sm:rounded-full">
          <Link to="/about">About</Link>
        </li>
      </ul>
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
