import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav
      className="p-4 pl-6 text-lg bg-gray-200 shadow-sm dark:bg-gray-900 flex text-gray-900 font-semibold"
      style={{ justifyContent: 'space-between' }}
    >
      <h1 className="pl-2 font-bold text-2xl">
        <i className={icon} style={{ color: 'black' }} />
        <span className="pl-2">{title}</span>
      </h1>
      <ul className="flex">
        <li className=" hover:text-gray-700 transform duration-100 hover:scale-95 hover:bg-gray-300 hover:shadow-inner px-3 py-1 rounded-full">
          <Link to="/">Home</Link>
        </li>
        <li className="px-3 hover:text-gray-700 transform duration-100 hover:scale-95 hover:bg-gray-300 hover:shadow-inner py-1 rounded-full">
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
