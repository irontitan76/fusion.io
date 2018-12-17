import React, { Component } from 'react';

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

import {
  addNewStrategy,
  changeNewStrategy,
  loadNewStrategy,
  loadStrategies,
  unloadNewStrategy,
  unloadStrategies,
} from 'actions/strategies';

const styles = theme => ({});

class ProfileReport extends Component {
  componentDidMount = () => {
    const { dispatch, match } = this.props;

    const path = match.path.split();
    const type = path[path.length - 1];

    if ( type === '/profile/standards/new') {
      dispatch(loadNewStandard());
      dispatch(loadStandards());
    } else if ( type === '/profile/strategies/new' ){
      dispatch(loadNewStrategy());
      dispatch(loadStrategies());
    }
  };

  componentWillUnmount = () => {
    const { dispatch, match } = this.props;

    const path = match.path.split();
    const type = path[path.length - 1];

    if ( type === '/profile/standards/new') {
      dispatch(unloadNewStandard());
      dispatch(unloadStandards());
    } else if ( type === '/profile/strategies/new' ){
      dispatch(unloadNewStrategy());
      dispatch(unloadStrategies());
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

    if ( type === '/profile/standards/new') {
      dispatch(changeNewStandard(name, value));
    } else if ( type === '/profile/strategies/new' ) {
      dispatch(changeNewStrategy(name, value));
    }
  };

  onSubmit = () => {
    const { dispatch, item, match } = this.props;

    const path = match.path.split();
    const type = path[path.length - 1];

    if ( type === '/profile/standards/new') {
      this.displayMessage(
        'Creating Standard...',
        () => dispatch(addNewStandard(item)).then(() => {
          return this.displayMessage(`Created Standard "${item.title}".`);
        })
      );
    } else if ( type === '/profile/strategies/new' ) {
      this.displayMessage(
        'Creating Strategy...',
        () => dispatch(addNewStrategy(item)).then(() => {
          return this.displayMessage(`Created Strategy "${item.title}".`);
        })
      );
    }
  };

  render() {
    const { item = {}, items = [], match } = this.props;

    const path = match.path.split();
    const type = path[path.length - 1];

    let name = '';
    if ( type === '/profile/standards/new') {
      name = 'Create Standard';
    } else if ( type === '/profile/strategies/new' ) {
      name = 'Create Strategies';
    }

    return <ReportForm
      name={name}
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      section={item}
      sections={items}
      submitText={name} />;
  }
}

export default withStyles(styles)(ProfileReport);