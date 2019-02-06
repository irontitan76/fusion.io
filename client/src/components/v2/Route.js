import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import PropTypes from 'prop-types';

import RoutePrivate from './RoutePrivate';

// eslint-disable-next-line
class Router extends Component {
  render() {
    const { isPrivate, ...props } = this.props;

    if (isPrivate) {
      return <RoutePrivate {...props} />;
    }
    return <Route {...props} />;
  }
}

Router.defaultProps = {
  isPrivate: false,
};

Router.propTypes = {
  isPrivate: PropTypes.bool,
};

export default Router;