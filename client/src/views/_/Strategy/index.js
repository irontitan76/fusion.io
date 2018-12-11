import React, { Component } from 'react';
import { connect } from 'react-redux';

import Report from 'components/Report';
import { loadStrategies, unloadStrategies } from 'actions/strategies';
import { strategies } from './content';

class Strategy extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(loadStrategies());
  };

  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch(unloadStrategies());
  };

  render() {
    return <Report content={strategies} />;
  }
}

const select = state => ({
  strategies: state.strategies.items
});

export default connect(select)(Strategy);