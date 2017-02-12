import React from 'react';
import Link from 'react-router/lib/Link';

const NavLink = props => (
  <Link 
    {...props} 
    className="NavLink"
    activeClassName="active" />
);

export default NavLink