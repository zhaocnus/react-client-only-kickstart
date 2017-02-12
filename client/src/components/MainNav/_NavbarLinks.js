import React, { PropTypes } from 'react';
import NavLink from '../../common/NavLink';

const NavbarLinks = ({ expanded }) => (     
  <div className={`collapse navbar-collapse${expanded ? ' in' : ''}`}> 
    <ul className="nav navbar-nav navbar-right">
      <li>
        <NavLink to="/page1">page 1</NavLink>
      </li>
      <li>
        <NavLink to="/page2">page 2</NavLink>
      </li>
    </ul>
  </div>
);

NavbarLinks.propTypes = {
  expanded: PropTypes.bool.isRequired
};

export default NavbarLinks