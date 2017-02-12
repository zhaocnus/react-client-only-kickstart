import React, { Component } from 'react';
import NavbarHeader from './_NavbarHeader';
import NavbarLinks from './_NavbarLinks';

class MainNav extends Component {
  constructor(props) {
    super(props);

    this.state = { expanded: false };
    this._toggleCollapse = this._toggleCollapse.bind(this);
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">       
          <NavbarHeader onClick={this._toggleCollapse} />
          <NavbarLinks expanded={this.state.expanded} />
        </div>
      </nav>
    );
  }

  _toggleCollapse() {
    this.setState({
      expanded: !this.state.expanded
    });
  }
}

export default MainNav