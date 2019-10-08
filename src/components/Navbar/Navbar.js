import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import githubLogoImg from '../../static/logo256.png';

function Navbar({ icon, title }) {
  return (
    <nav className="navbar bg-primary">
      <div
        style={{
          width: '180px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <img src={githubLogoImg} alt={title} style={{ width: '32px' }} />
        <h1> {title}</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
