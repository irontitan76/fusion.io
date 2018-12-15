import React, { Component } from 'react';
import { connect } from 'react-redux';

import withStyles from '@material-ui/core/styles/withStyles';

import ReportForm from 'components/ReportForm';

import {
  loadMessage
} from 'actions/messages';

import {
  addNewStandard,
  changeNewStandard,
  loadNewStandard,
  loadStandards,
  unloadNewStandard,
  unloadStandards,
} from 'actions/standards';

const styles = theme => ({});

class ProfileStandard extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(loadNewStandard());
    dispatch(loadStandards());
  };

  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch(unloadNewStandard());
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
      'Creating Standard...',
      () => dispatch(addNewStandard(standard)).then(() => {
        return this.displayMessage(`Created Standard "${standard.title}".`);
      })
    );
  };

  render() {
    const { standard = {}, standards = [] } = this.props;

    return <ReportForm
      name='Create Standard'
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      section={standard}
      sections={standards}
      submitText='Create Standard' />;
  }
}

const select = state => ({
  message: state.messages,
  standard: state.standards.currentItem,
  standards: state.standards.items,
});

export default withStyles(styles)(connect(select)(ProfileStandard));