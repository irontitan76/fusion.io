import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withRouter from 'react-router-dom/withRouter';

import { startSession } from 'actions/session';
import LoginForm from './LoginForm';

class Login extends Component {
  componentDidMount() {
    const { auth, history  } = this.props;
    // Need to save auth in sessionStorage
    if (auth) history.push('/profile');
  }

  componentWillReceiveProps(nextProps) {
    const { history } = this.props;
    if (nextProps.auth) history.push('/profile');
  }

  onSubmit = (password, username) => {
    const { dispatch } = this.props;
    dispatch(startSession(password, username));
  };

  render() {
    return <LoginForm onSubmit={this.onSubmit} />;
  }
}

Login.propTypes = {
  auth: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};

const select = state => ({
  auth: state.session.auth,
});

export default withRouter(connect(select)(Login));