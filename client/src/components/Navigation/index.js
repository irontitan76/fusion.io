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
          items={secondary}
          onClick={this._onClick}
          title={title}
        />
        <NavMainMenu
          items={primary}
          onClose={this._onClick}
          open={isNavOpen}
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