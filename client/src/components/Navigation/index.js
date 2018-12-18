import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavBar from './NavBar';
import NavMainMenu from './NavMainMenu';

import { toggleNav } from 'actions/nav';

export class Nav extends Component {
  _onClick = () => this.props.dispatch(toggleNav());

  render() {
    const { nav: { isNavOpen }, primary, secondary, title } = this.props;

    return (
      <nav>

        <NavBar
          onClick={ this._onClick }
          items={ secondary }
          title={ title } />

        <NavMainMenu
          onClose={ this._onClick }
          open={ isNavOpen }
          items={ primary } />
      </nav>
    );
  }
}

Nav.defaultProps = {
  classes: {},
  title: ''
};

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
  title: PropTypes.node.isRequired
};

const select = state => ({
  nav: state.nav,
})

export default connect(select)(Nav);