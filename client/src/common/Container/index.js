import React, { PropTypes } from 'react';

const Container = ({ children }) => (
  <div className="container">
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node
  ])
};

export default Container