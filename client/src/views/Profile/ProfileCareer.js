import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';

import ReportForm from 'components/ReportForm';

import {
  loadMessage
} from 'actions/messages';

import {
  changeCareer,
  createCareer,
  loadCareer,
  removeCareer,
  unloadCareer,
  updateCareer,
} from 'actions/careers';

const styles = theme => ({
  description: {
    fontFamily: 'Inconsolata, Monaco, Consolas, "Courier New", Courier;',
    fontSize: 12,
  },
  root: {
    height: '100%',
  },
  careerContainer: {
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 3,
  },
  selectMenu: {
    maxHeight: 400,
  },
  title: {
    fontWeight: 400,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 3,
  }
});

class ProfileCareer extends Component {
  componentDidMount = () => {
    const { dispatch, match } = this.props;
    dispatch(loadCareer(match.params.itemId));
  };

  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch(unloadCareer());
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
    dispatch(changeCareer(name, value));
  };

  onDelete = () => {
    const { dispatch, history, career } = this.props;

    this.displayMessage(
      'Deleting Career...',
      () => dispatch(removeCareer(career._id)).then(() => {
        this.displayMessage(`Deleted Career "${career.role}".`);
        return setTimeout(() => history.push('/profile/careers'), 1000);
      })
    );
  };

  onUpdate = () => {
    const { career, dispatch } = this.props;

    this.displayMessage(
      'Updating Career...',
      () => dispatch(updateCareer(career)).then(() => {
        return this.displayMessage(`Updated Career "${career.role}".`);
      })
    );
  };

  onCreate = () => {
    const { career, dispatch } = this.props;

    this.displayMessage(
      'Creating Career...',
      () => dispatch(createCareer(career)).then(() => {
        return this.displayMessage(`Created Career "${career.role}".`);
      })
    );
  };

  getOrganizations = () => {
    const orgs = [
      { _id: '0', name: 'Fusion A.I.' },
      { _id: '1', name: 'Fusion Consulting' },
      { _id: '2', name: 'Fusion Cosmos' },
      { _id: '3', name: 'Fusion Energy' },
      { _id: '4', name: 'Fusion Finance' },
      { _id: '5', name: 'Fusion Health' },
      { _id: '5', name: 'Fusion Legal' },
      { _id: '5', name: 'Fusion Media' },
      { _id: '5', name: 'Fusion Technology' },
      { _id: '5', name: 'Fusion Transport' },
    ];

    return orgs.map((org) => {
      return <MenuItem key={org._id} value={org.name}>
        {org.name}
      </MenuItem>;
    });
  };

  getTeams = () => {
    const teams = [
      { _id: '0', name: 'DevOps' },
      { _id: '1', name: 'Marketing' },
      { _id: '2', name: 'Design' },
      { _id: '3', name: 'Finance' },
      { _id: '4', name: 'UI' },
      { _id: '5', name: 'Web' },
    ];

    return teams.map((team) => {
      return <MenuItem key={team._id} value={team.name}>
        {team.name}
      </MenuItem>;
    });
  };

  getCities = () => {
    const cities = [
      { _id: '0', name: 'Austin' }
    ];

    return cities.map((city) => {
      return <MenuItem key={city._id} value={city.name}>
        {city.name}
      </MenuItem>;
    });
  };

  getStates = () => {
    const states = [
      { _id: '0', name: 'TX' }
    ];

    return states.map((state) => {
      return <MenuItem key={state._id} value={state.name}>
        {state.name}
      </MenuItem>;
    });
  };

  render() {
    const { classes, match, career = {} } = this.props;
    const isExist = match.params.itemId;

    const fields = [
      {
        fullWidth: true,
        label: 'Role',
        name: 'role',
        onChange: this.onChange,
        placeholder: 'Type the role\'s name here...',
        size: { xs: 12 },
        type: 'text',
        value: career.role || '',
        variant: 'outlined',
      },
      {
        children: this.getOrganizations(),
        fullWidth: true,
        label: 'Organization',
        name: 'org',
        onChange: this.onChange,
        placeholder: 'Select the organization...',
        select: true,
        SelectProps: { MenuProps: { className: classes.selectMenu } },
        size: { md: 6, xs: 12 },
        type: 'select',
        value: career.org || '',
        variant: 'outlined',
      },
      {
        children: this.getTeams(),
        fullWidth: true,
        label: 'Team',
        name: 'team',
        onChange: this.onChange,
        placeholder: 'Select the team...',
        select: true,
        SelectProps: { MenuProps: { className: classes.selectMenu } },
        size: { md: 6, xs: 12 },
        type: 'select',
        value: career.team || '',
        variant: 'outlined',
      },
      {
        children: this.getCities(),
        fullWidth: true,
        label: 'City',
        name: 'city',
        onChange: this.onChange,
        placeholder: 'Select the city...',
        select: true,
        SelectProps: { MenuProps: { className: classes.selectMenu } },
        size: { md: 6, xs: 12 },
        type: 'select',
        value: (career.location && career.location.city) || career.city || '',
        variant: 'outlined',
      },
      {
        children: this.getStates(),
        fullWidth: true,
        label: 'State',
        name: 'state',
        onChange: this.onChange,
        placeholder: 'Select the state...',
        select: true,
        SelectProps: { MenuProps: { className: classes.selectMenu } },
        size: { md: 6, xs: 12 },
        type: 'select',
        value: (career.location && career.location.state) || career.state || '',
        variant: 'outlined',
      },
      {
        InputProps: { className: classes.description },
        fullWidth: true,
        label: 'Description',
        multiline: true,
        name: 'description',
        onChange: this.onChange,
        placeholder: 'Type the description here...',
        rows: 20,
        size: { xs: 12 },
        type: 'text',
        value: career.description || '',
        variant: 'outlined',
      }
    ];

    let text = '';
    if ( isExist ) {
      text = 'Update Career';
    } else {
      text = 'Create Career';
    }

    return <ReportForm
      cancelButton={isExist ? 'Delete Career' : null}
      onCancel={isExist ? this.onDelete : null}
      onChange={this.onChange}
      onSubmit={isExist ? this.onUpdate : this.onCreate}
      fields={fields}
      submitButton={text}
      title={text} />;
  }
}

const select = state => ({
  message: state.messages,
  career: state.careers.currentItem,
  careers: state.careers.items,
});

export default withStyles(styles)(connect(select)(ProfileCareer));