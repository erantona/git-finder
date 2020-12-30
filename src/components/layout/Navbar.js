import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav
      className="p-4 pl-6 text-lg bg-gray-900 flex text-white"
      style={{ justifyContent: 'space-between' }}
    >
      <h1 className="pl-2 font-bold text-2xl">
        <i className={icon} style={{ color: 'white' }} />
        <span className="pl-2">{title}</span>
      </h1>
      <ul className="flex">
        <li className=" hover:text-gray-400">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4 hover:text-gray-400">
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
