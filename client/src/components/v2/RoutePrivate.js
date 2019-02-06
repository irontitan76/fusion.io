import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Redirect from 'react-router-dom/Redirect';
import Route from 'react-router-dom/Route';
import withRouter from 'react-router-dom/withRouter';

/**
 * @class @name PrivateRoute
 * @description A component that verifies the current user is authenticated
 *  before navigating them to the path in question
 */
class RoutePrivate extends Component {
  async componentDidMount() {
    const { history, isAuth, location } = this.props;

    if (!isAuth.payload.auth || isAuth.payload.err) {
      return history.push({
        pathname: '/login',
        state: { from: location },
      });
    }
  }

  render() {
    const { component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props => (
          localStorage.getItem('session_token')
            ? <Component {...props} />
            : (
              <Redirect to={{
                pathname: '/login',
                state: { from: props.location },
              }}
              />
            )
        )}
      />
    );
  }
}

RoutePrivate.propTypes = {
  component: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  isAuth: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default withRouter(RoutePrivate);