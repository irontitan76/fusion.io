import React, { Component } from 'react';
import { connect } from 'react-redux';

import Report from 'components/Report';
import { loadStandards, unloadStandards } from 'actions/standards';
import { standards } from './content';

class Standard extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(loadStandards());
  };

  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch(unloadStandards());
  };

  render() {
    return <Report content={standards} />;
  }
}

const select = state => ({
  // standards: state.standards.items
});

export default connect(select)(Standard);