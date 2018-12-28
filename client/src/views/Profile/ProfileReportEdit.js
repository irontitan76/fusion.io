import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

import ReportForm from 'components/ReportForm';

import {
  loadMessage
} from 'actions/messages';

import {
  changePolicy,
  loadPolicies,
  loadPolicy,
  unloadPolicies,
  unloadPolicy,
  updatePolicy,
} from 'actions/policies';

import {
  changeNewStandard,
  loadStandard,
  loadStandards,
  removeStandard,
  unloadStandards,
  unloadStandard,
  updateStandard,
} from 'actions/standards';

import {
  changeNewStrategy,
  loadStrategy,
  loadStrategies,
  removeStrategy,
  unloadStrategies,
  unloadStrategy,
  updateStrategy,
} from 'actions/strategies';

const styles = theme => ({});

class ProfileReportEdit extends Component {
  componentDidMount = () => {
    const { dispatch, match } = this.props;

    const path = match.path.split();
    const type = path[path.length - 1];

    if ( type === '/profile/standards/edit/:itemId') {
      dispatch(loadStandard(match.params.itemId));
      dispatch(loadStandards());
    } else if ( type === '/profile/strategies/edit/:itemId' ){
      dispatch(loadStrategy(match.params.itemId));
      dispatch(loadStrategies());
    } else if ( type === '/profile/policies/edit/:itemId' ){
      dispatch(loadPolicy(match.params.itemId));
      dispatch(loadPolicies());
    }
  };

  componentWillUnmount = () => {
    const { dispatch, match } = this.props;

    const path = match.path.split();
    const type = path[path.length - 1];

    if ( type === '/profile/standards/edit/:itemId') {
      dispatch(unloadStandard());
      dispatch(unloadStandards());
    } else if ( type === '/profile/strategies/edit/:itemId' ){
      dispatch(unloadStrategy());
      dispatch(unloadStrategies());
    } else if ( type === '/profile/policies/edit/:itemId' ){
      dispatch(unloadPolicy());
      dispatch(unloadPolicies());
    }
  };

  displayMessage = (content, cb) => {
    const { dispatch } = this.props;
    dispatch(loadMessage(content)).then(() => {
      cb && cb()
    });
  };

  onChange = (event) => {
    const { dispatch, match } = this.props;
    const { name, value } = event.target;

    const path = match.path.split();
    const type = path[path.length - 1];

    if ( type === '/profile/standards/edit/:itemId') {
      dispatch(changeNewStandard(name, value));
    } else if ( type === '/profile/strategies/edit/:itemId' ){
      dispatch(changeNewStrategy(name, value));
    } else if ( type === '/profile/policies/edit/:itemId' ){
      dispatch(changePolicy(name, value));
    }
  };

  onDelete = () => {
    const { dispatch, history, item, match } = this.props;

    const path = match.path.split();
    const type = path[path.length - 1];

    if ( type === '/profile/standards/edit/:itemId') {
      this.displayMessage(
        'Deleting Standard...',
        () => dispatch(removeStandard(item._id)).then(() => {
          this.displayMessage(`Deleted Standard "${item.title}".`);
          return setTimeout(() => history.push('/profile/standards'), 1000);
        })
      );
    } else if ( type === '/profile/strategies/edit/:itemId' ){
      this.displayMessage(
        'Deleting Strategy...',
        () => dispatch(removeStrategy(item._id)).then(() => {
          this.displayMessage(`Deleted Strategy "${item.title}".`);
          return setTimeout(() => history.push('/profile/strategies'), 1000);
        })
      );
    }
  };

  onSubmit = () => {
    const { dispatch, item, match } = this.props;

    const path = match.path.split();
    const type = path[path.length - 1];

    if ( type === '/profile/standards/edit/:itemId') {
      this.displayMessage(
        'Updating Standard...',
        () => dispatch(updateStandard(item)).then(() => {
          return this.displayMessage(`Updated Standard "${item.title}".`);
        })
      );
    } else if ( type === '/profile/strategies/edit/:itemId' ){
      this.displayMessage(
        'Updating Strategy...',
        () => dispatch(updateStrategy(item)).then(() => {
          return this.displayMessage(`Updated Strategy "${item.title}".`);
        })
      );
    } else if ( type === '/profile/policies/edit/:itemId' ){
      this.displayMessage(
        'Updating Policy...',
        () => dispatch(updatePolicy(item)).then(() => {
          return this.displayMessage(`Updated Policy "${item.title}".`);
        })
      );
    }
  };

  render() {
    const { item = {}, items = [], match } = this.props;

    const path = match.path.split();
    const type = path[path.length - 1];

    let deleteText = '',
        name = '',
        submitText = '';

    if ( type === '/profile/standards/edit/:itemId') {
      deleteText = 'Delete Standard';
      name = 'Edit Standard';
      submitText = 'Update Standard';
    } else if ( type === '/profile/strategies/edit/:itemId' ){
      deleteText = 'Delete Strategy';
      name = 'Edit Strategy';
      submitText = 'Update Strategy';
    } else if ( type === '/profile/policies/edit/:itemId' ){
      deleteText = 'Delete Policy';
      name = 'Edit Policy';
      submitText = 'Update Policy';
    }

    return <ReportForm
      deleteText={deleteText}
      name={name}
      onChange={this.onChange}
      onDelete={this.onDelete}
      onSubmit={this.onSubmit}
      section={item}
      sections={items}
      submitText={submitText} />;
  }
}

export default withStyles(styles)(ProfileReportEdit);