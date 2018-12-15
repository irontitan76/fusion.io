import React, { Component } from 'react';
import { connect } from 'react-redux';

import withStyles from '@material-ui/core/styles/withStyles';

import ReportForm from 'components/ReportForm';

import {
  loadMessage
} from 'actions/messages';

import {
  changeNewStandard,
  loadStandard,
  loadStandards,
  unloadStandards,
  unloadStandard,
  updateStandard,
} from 'actions/standards';

const styles = theme => ({});

class ProfileStandard extends Component {
  componentDidMount = () => {
    const { dispatch, match } = this.props;
    dispatch(loadStandard(match.params.standardId));
    dispatch(loadStandards());
  };

  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch(unloadStandard());
    dispatch(unloadStandards());
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

    dispatch(changeNewStandard(name, value));
  };

  onSubmit = () => {
    const { dispatch, standard } = this.props;

    this.displayMessage(
      'Updating Standard...',
      () => dispatch(updateStandard(standard)).then(() => {
        return this.displayMessage(`Updated Standard "${standard.title}".`);
      })
    );
  };

  render() {
    const { standard = {}, standards = [] } = this.props;

    return <ReportForm
      name='Edit Standard'
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      section={standard}
      sections={standards}
      submitText='Update Standard' />;
  }
}

const select = state => ({
  message: state.messages,
  standard: state.standards.currentItem,
  standards: state.standards.items,
});

export default withStyles(styles)(connect(select)(ProfileStandard));