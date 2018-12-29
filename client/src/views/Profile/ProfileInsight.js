import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReportForm from 'components/ReportForm';

import {
  loadMessage
} from 'actions/messages';

import {
  changeInsight,
  createInsight,
  loadInsight,
  removeInsight,
  unloadInsight,
  updateInsight,
} from 'actions/insights';

class ProfileInsight extends Component {
  componentDidMount = () => {
    const { dispatch, match } = this.props;
    dispatch(loadInsight(match.params.itemId));
  };

  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch(unloadInsight());
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
    dispatch(changeInsight(name, value));
  };

  onDelete = () => {
    const { dispatch, history, insight } = this.props;

    this.displayMessage(
      'Deleting Standard...',
      () => dispatch(removeInsight(insight._id)).then(() => {
        this.displayMessage(`Deleted Standard "${insight.title}".`);
        return setTimeout(() => history.push('/profile/insights'), 1000);
      })
    );
  };

  onUpdate = () => {
    const { dispatch, insight, user } = this.props;

    this.displayMessage(
      'Updating Insight...',
      () => dispatch(updateInsight(insight, user)).then(() => {
        return this.displayMessage(`Updated Insight "${insight.title}".`);
      })
    );
  };

  onCreate = () => {
    const { dispatch, insight, user } = this.props;

    this.displayMessage(
      'Creating Insight...',
      () => dispatch(createInsight(insight, user)).then(() => {
        return this.displayMessage(`Created Insight "${insight.title}".`);
      })
    );
  };

  render() {
    const { insight = {}, match } = this.props;
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
        value: insight.title || '',
        variant: 'outlined',
      },
      {
        fullWidth: true,
        label: 'Subtitle',
        name: 'subtitle',
        onChange: this.onChange,
        placeholder: 'Type subtitle here (optional)...',
        size: { xs: 12 },
        type: 'text',
        value: insight.subtitle || '',
        variant: 'outlined',
      },
      {
        // InputProps: { className: classes.content },
        fullWidth: true,
        label: 'Content',
        multiline: true,
        name: 'content',
        onChange: this.onChange,
        placeholder: 'Type content here...',
        rows: 20,
        size: { xs: 12 },
        type: 'text',
        value: insight.content || '',
        variant: 'outlined',
      }
    ];

    let text = '';
    if ( isExist ) {
      text = 'Update Insight';
    } else {
      text = 'Create Insight';
    }

    return <ReportForm
      cancelButton={isExist ? 'Delete Insight' : null}
      onCancel={isExist ? this.onDelete : null}
      onChange={this.onChange}
      onSubmit={isExist ? this.onUpdate : this.onSubmit}
      fields={fields}
      submitButton={text}
      title={text} />;
  }
}

const select = state => ({
  message: state.messages,
  insight: state.insights.currentItem,
  insights: state.insights.filteredItems,
  user: state.session.user,
});

export default connect(select)(ProfileInsight);