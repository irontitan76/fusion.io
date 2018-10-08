import React, { Component } from 'react';
import { connect} from 'react-redux';
import withRouter from 'react-router-dom/withRouter';

import LoginForm from './LoginForm';
import { startSession } from 'actions/session';

class Login extends Component {
  componentDidMount() {
    const { auth, history  } = this.props;
    // Need to save auth in sessionStorage
    if ( auth ) history.push('/');
  }

  componentWillReceiveProps(nextProps) {
    const { history } = this.props;
    if ( nextProps.auth ) history.push('/');
  }

  onSubmit = (password, username) => {
    const { dispatch } = this.props;
    dispatch(startSession(password, username));
  };

  render() {
    return <>
      <LoginForm onSubmit={this.onSubmit}/>
    </>;
  }
}

const select = state => ({
  auth: state.session.auth,
});

export default withRouter(connect(select)(Login));