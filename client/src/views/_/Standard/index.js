import React, { Component } from 'react';
import { connect } from 'react-redux';

import Report from 'components/Report';

import {
  loadStandards,
  unloadStandards
} from 'actions/standards';

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
    const { standards } = this.props;
    return <Report content={standards} />;
  }
}

const select = state => ({
  standards: state.standards.items
});

export default connect(select)(Standard);