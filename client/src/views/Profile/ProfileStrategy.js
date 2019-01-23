import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';

import ReportForm from 'components/ReportForm';

import {
  loadMessage,
} from 'actions/messages';

import {
  changeStrategy,
  createStrategy,
  loadStrategy,
  loadStrategies,
  removeStrategy,
  unloadStrategy,
  unloadStrategies,
  updateStrategy,
} from 'actions/strategies';

const styles = () => ({
  content: {
    fontFamily: 'Inconsolata, Monaco, Consolas, "Courier New", Courier;',
    fontSize: 12,
  },
  selectMenu: {
    maxHeight: 400,
  },
});

class ProfileStrategy extends Component {
  componentDidMount = () => {
    const { dispatch, match } = this.props;
    dispatch(loadStrategy(match.params.itemId));
    dispatch(loadStrategies());
  };

  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch(unloadStrategy());
    dispatch(unloadStrategies());
  };

  displayMessage = async (content, cb) => {
    const { dispatch } = this.props;
    await dispatch(loadMessage(content));
    cb && await cb();
  };

  onChange = (event) => {
    const { dispatch } = this.props;
    const { name, value } = event.target;
    dispatch(changeStrategy(name, value));
  };

  onDelete = async () => {
    const { dispatch, history, strategy } = this.props;

    await this.displayMessage('Deleting Strategy...');
    await dispatch(removeStrategy(strategy._id));
    await this.displayMessage(`Deleted Strategy "${strategy.title}".`);

    return await setTimeout(() => history.push('/profile/strategies'), 1000);
  };

  onUpdate = async () => {
    const { dispatch, strategy } = this.props;

    await this.displayMessage('Updating Strategy...');
    await dispatch(updateStrategy(strategy));

    return await this.displayMessage(`Updated Strategy "${strategy.title}".`);
  };

  onCreate = async () => {
    const { dispatch, strategy } = this.props;

    await this.displayMessage('Creating Strategy...');
    await dispatch(createStrategy(strategy));
    return await this.displayMessage(`Created Strategy "${strategy.title}".`);
  };

  getParents = () => {
    const { strategies = [] } = this.props;

    const items = strategies.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.id}
          .
          &nbsp;
          {item.title}
        </MenuItem>
      );
    });

    if (items.length === 0) {
      return {
        disable: true,
        items: [
          <MenuItem key='none' value='none'>No parent sections </MenuItem>,
        ],
      };
    }

    return {
      disable: false,
      items: [
        <MenuItem key='none' value='none'>
          No parent section
        </MenuItem>,
        ...items,
      ],
    };
  };

  getSiblings = () => {
    const { strategy = {}, strategies = [] } = this.props;

    const items = strategies
      .filter((item) => {
        const isSibling = item.parentId === strategy.parentId;
        const isNotSelf = item.id !== strategy.id;
        return isSibling && isNotSelf;
      })
      .map((item) => {
        return (
          <MenuItem key={item.id} value={item.id}>
            {item.id}
            .
            &nbsp;
            {item.title}
          </MenuItem>
        );
      });

    if (items.length === 0) {
      return {
        disable: true,
        items: [
          <MenuItem key='none' value='none'>No sibling sections </MenuItem>,
        ],
      };
    }

    return {
      disable: false,
      items: [
        <MenuItem key='none' value='none'>
          No previous section
        </MenuItem>,
        ...items,
      ],
    };
  };

  getValue = (property) => {
    return typeof property === 'number' ? property : 'none';
  };

  render() {
    const { classes, match, strategy = {} } = this.props;
    const isExist = match.params.itemId;

    const parents = this.getParents();
    const parent = this.getValue(strategy.parentId);

    const siblings = this.getSiblings();
    const sibling = this.getValue(strategy.siblingId);

    const fields = [
      {
        fullWidth: true,
        label: 'Title',
        name: 'title',
        onChange: this.onChange,
        placeholder: 'Type the section title here...',
        size: { xs: 12 },
        type: 'text',
        value: strategy.title || '',
        variant: 'outlined',
      },
      {
        children: parents.items,
        disabled: parents.disable,
        fullWidth: true,
        label: 'Parent Section',
        name: 'parentId',
        onChange: this.onChange,
        placeholder: 'Select the parent section',
        select: true,
        SelectProps: { MenuProps: { className: classes.selectMenu } },
        size: { md: 6, xs: 12 },
        type: 'select',
        value: parent,
        variant: 'outlined',
      },
      {
        children: siblings.items,
        disabled: siblings.disable,
        fullWidth: true,
        label: 'Previous Section',
        name: 'siblingId',
        onChange: this.onChange,
        placeholder: 'Select the sibling section',
        select: true,
        SelectProps: { MenuProps: { className: classes.selectMenu } },
        size: { md: 6, xs: 12 },
        type: 'select',
        value: sibling,
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
        value: (strategy.content && strategy.content.body) || '',
        variant: 'outlined',
      },
    ];

    let text = '';
    if (isExist) {
      text = 'Update Strategy';
    } else {
      text = 'Create Strategy';
    }

    return (
      <ReportForm
        cancelButton={isExist ? 'Delete Strategy' : null}
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

ProfileStrategy.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
  message: PropTypes.shape({}).isRequired,
  strategies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  strategy: PropTypes.shape({}).isRequired,
};

const select = state => ({
  message: state.messages,
  strategies: state.strategies.items,
  strategy: state.strategies.currentItem,
});

export default withStyles(styles)(connect(select)(ProfileStrategy));