import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Report from 'components/Report';

import {
  loadPolicies,
  unloadPolicies,
} from 'actions/policies';

class Privacy extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(loadPolicies());
  };

  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch(unloadPolicies());
  };

  render() {
    const { policies } = this.props;
    return <Report content={policies} />;
  }
}

Privacy.propTypes = {
  dispatch: PropTypes.func.isRequired,
  policies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const select = state => ({
  policies: state.policies.items,
});

export default connect(select)(Privacy);