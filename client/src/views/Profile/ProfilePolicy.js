import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import withStyles from '@material-ui/core/styles/withStyles';

import ReportForm from 'components/ReportForm';

import {
  loadMessage,
} from 'actions/messages';

import {
  changePolicy,
  createPolicy,
  loadPolicy,
  removePolicy,
  unloadPolicy,
  updatePolicy,
} from 'actions/policies';

const styles = () => ({
  content: {
    fontFamily: 'Inconsolata, Monaco, Consolas, "Courier New", Courier;',
    fontSize: 12,
  },
});

class ProfilePolicy extends Component {
  componentDidMount = () => {
    const { dispatch, match } = this.props;
    dispatch(loadPolicy(match.params.itemId));
  };

  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch(unloadPolicy());
  };

  displayMessage = (content, cb) => {
    const { dispatch } = this.props;
    dispatch(loadMessage(content)).then(() => cb && cb());
  };

  onChange = (event) => {
    const { dispatch } = this.props;
    const { name, value } = event.target;
    dispatch(changePolicy(name, value));
  };

  onDelete = () => {
    const { dispatch, history, policy } = this.props;

    this.displayMessage(
      'Deleting Policy...',
      () => dispatch(removePolicy(policy._id)).then(() => {
        this.displayMessage(`Deleted Policy "${policy.title}".`);
        return setTimeout(() => history.push('/profile/policies'), 1000);
      })
    );
  };

  onUpdate = () => {
    const { dispatch, policy } = this.props;

    this.displayMessage(
      'Updating Policy...',
      () => dispatch(updatePolicy(policy)).then(() => {
        return this.displayMessage(`Updated Policy "${policy.title}".`);
      })
    );
  };

  onCreate = () => {
    const { dispatch, history, policy } = this.props;

    this.displayMessage(
      'Creating Policy...',
      () => dispatch(createPolicy(policy)).then((action) => {
        const { _id } = action.payload.item;
        this.displayMessage(`Created Policy "${policy.title}".`);
        return setTimeout(() => history.push(`/profile/policies/edit/${_id}`), 1000);
      })
    );
  };

  render() {
    const { classes, policy = {}, match } = this.props;
    const isExist = match.params.itemId;

    const fields = [
      {
        fullWidth: true,
        label: 'Title',
        name: 'title',
        onChange: this.onChange,
        placeholder: 'Type the section title here...',
        size: { xs: 12 },
        type: 'text',
        value: policy.title || '',
        variant: 'outlined',
      },
      {
        fullWidth: true,
        label: 'URL Suffix',
        name: 'location',
        onChange: this.onChange,
        placeholder: 'Type the URL suffix here...',
        size: { xs: 12 },
        type: 'text',
        value: policy.location || '',
        variant: 'outlined',
      },
      {
        fullWidth: true,
        InputProps: { className: classes.content },
        label: 'Content',
        multiline: true,
        name: 'content',
        onChange: this.onChange,
        placeholder: 'Type content here...',
        rows: 20,
        size: { xs: 12 },
        type: 'text',
        value: (policy.content && policy.content.body) || '',
        variant: 'outlined',
      },
    ];

    let text = '';
    if (isExist) {
      text = 'Update Policy';
    } else {
      text = 'Create Policy';
    }

    return (
      <ReportForm
        cancelButton={isExist ? 'Delete Policy' : null}
        onCancel={isExist ? this.onDelete : null}
        onChange={this.onChange}
        onSubmit={isExist ? this.onUpdate : this.onCreate}
        fields={fields}
        submitButton={text}
        title={text}
      />
    );
  }
}

ProfilePolicy.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
  policy: PropTypes.shape({}).isRequired,
};

const select = state => ({
  message: state.messages,
  policy: state.policies.currentItem,
  user: state.session.user,
});

export default withStyles(styles)(connect(select)(ProfilePolicy));