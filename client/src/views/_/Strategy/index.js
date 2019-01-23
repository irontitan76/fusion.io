import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Report from 'components/Report';

import {
  loadStrategies,
  unloadStrategies,
} from 'actions/strategies';

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
    const { strategies } = this.props;
    return <Report content={strategies} />;
  }
}

Strategy.propTypes = {
  dispatch: PropTypes.func.isRequired,
  strategies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const select = state => ({
  strategies: state.strategies.items,
});

export default connect(select)(Strategy);