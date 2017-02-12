import React, { PropTypes } from 'react';

const NavbarHeader = ({ onClick }) => (     
  <div className="navbar-header">
    <button 
      type="button" 
      className="navbar-toggle collapsed"
      onClick={onClick}>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>
    <a className="navbar-brand" href="/">Home</a>
  </div>
);

NavbarHeader.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default NavbarHeader