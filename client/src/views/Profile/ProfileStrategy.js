import React, { Component } from 'react';
import { connect } from 'react-redux';

import withStyles from '@material-ui/core/styles/withStyles';

import ReportForm from 'components/ReportForm';

import {
  loadMessage
} from 'actions/messages';

import {
  addNewStrategy,
  changeNewStrategy,
  loadNewStrategy,
  loadStrategies,
  unloadNewStrategy,
  unloadStrategies,
} from 'actions/strategies';

const styles = theme => ({});

class ProfileStrategy extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(loadNewStrategy());
    dispatch(loadStrategies());
  };

  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch(unloadNewStrategy());
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
      'Creating Strategy...',
      () => dispatch(addNewStrategy(strategy)).then(() => {
        return this.displayMessage(`Created Strategy "${strategy.title}".`);
      })
    );
  };

  render() {
    const { strategy = {}, strategies = [] } = this.props;

    return <ReportForm
      name='Create Strategy'
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      section={strategy}
      sections={strategies}
      submitText='Create Strategy' />;
  }
}

const select = state => ({
  message: state.messages,
  strategy: state.strategies.currentItem,
  strategies: state.strategies.items,
});

export default withStyles(styles)(connect(select)(ProfileStrategy));