import React, { Component } from 'react';
import { connect } from 'react-redux';

import withStyles from '@material-ui/core/styles/withStyles';

import ReportForm from 'components/ReportForm';

import {
  loadMessage
} from 'actions/messages';

import {
  changeNewStrategy,
  loadStrategy,
  loadStrategies,
  unloadStrategies,
  unloadStrategy,
  updateStrategy,
} from 'actions/strategies';

const styles = theme => ({});

class ProfileStrategyEdit extends Component {
  componentDidMount = () => {
    const { dispatch, match } = this.props;
    dispatch(loadStrategy(match.params.strategyId));
    dispatch(loadStrategies());
  };

  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch(unloadStrategy());
    dispatch(unloadStrategies());
  };

  displayMessage = (content, cb) => {
    const { dispatch } = this.props;
    dispatch(loadMessage(content)).then(() => {
      cb && cb()
    });
  };

  onChange = (event) => {
    const { dispatch } = this.props;
    const { name, value } = event.target;

    dispatch(changeNewStrategy(name, value));
  };

  onSubmit = () => {
    const { dispatch, strategy } = this.props;

    this.displayMessage(
      'Updating Strategy...',
      () => dispatch(updateStrategy(strategy)).then(() => {
        return this.displayMessage(`Updated Strategy "${strategy.title}".`);
      })
    );
  };

  render() {
    const { strategy = {}, strategies = [] } = this.props;

    return <ReportForm
      name='Edit Strategy'
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      section={strategy}
      sections={strategies}
      submitText='Update Strategy' />;
  }
}

const select = state => ({
  message: state.messages,
  strategy: state.strategies.currentItem,
  strategies: state.strategies.items,
});

export default withStyles(styles)(connect(select)(ProfileStrategyEdit));