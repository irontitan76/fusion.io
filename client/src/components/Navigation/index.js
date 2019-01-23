import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleNav } from 'actions/nav';

import NavBar from './NavBar';
import NavMainMenu from './NavMainMenu';

class Nav extends Component {
  _onClick = () => {
    const { dispatch } = this.props;
    dispatch(toggleNav());
  };

  render() {
    const { nav: { isNavOpen }, primary, secondary, title } = this.props;

    return (
      <nav>
        <NavBar
          onClick={this._onClick}
          items={secondary}
          title={title}
        />
        <NavMainMenu
          onClose={this._onClick}
          open={isNavOpen}
          items={primary}
        />
      </nav>
    );
  }
}

Nav.defaultProps = {
  secondary: [],
};

Nav.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({}).isRequired,
  primary: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  secondary: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.node.isRequired,
};

const select = state => ({
  nav: state.nav,
});

export default connect(select)(Nav);