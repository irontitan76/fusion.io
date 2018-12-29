import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';
import ReportForm from 'components/ReportForm';

import {
  loadMessage
} from 'actions/messages';

import {
  addStrategy,
  changeStrategy,
  loadStrategy,
  loadStrategies,
  removeStrategy,
  unloadStrategy,
  unloadStrategies,
  updateStrategy,
} from 'actions/strategies';

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

  displayMessage = (content, cb) => {
    const { dispatch } = this.props;
    dispatch(loadMessage(content)).then(() => {
      cb && cb()
    });
  };

  onChange = (event) => {
    const { dispatch } = this.props;
    const { name, value } = event.target;
    dispatch(changeStrategy(name, value));
  };

  onDelete = () => {
    const { dispatch, history, strategy } = this.props;

    this.displayMessage(
      'Deleting Strategy...',
      () => dispatch(removeStrategy(strategy._id)).then(() => {
        this.displayMessage(`Deleted Strategy "${strategy.title}".`);
        return setTimeout(() => history.push('/profile/strategies'), 1000);
      })
    );
  };

  onUpdate = () => {
    const { dispatch, strategy } = this.props;

    this.displayMessage(
      'Updating Strategy...',
      () => dispatch(updateStrategy(strategy)).then(() => {
        return this.displayMessage(`Updated Strategy "${strategy.title}".`);
      })
    );
  };

  onCreate = () => {
    const { dispatch, item } = this.props;

    this.displayMessage(
      'Creating Strategy...',
      () => dispatch(addStrategy(item)).then(() => {
        return this.displayMessage(`Created Strategy "${item.title}".`);
      })
    );
  };

  getParents = () => {
    const { strategies = [] } = this.props;

    let items = strategies.map((item, key) => {
      return <MenuItem key={key} value={item.id}>
        {item.id}. &nbsp;{item.title}
      </MenuItem>
    });

    if (items.length === 0) {
      return {
        disable: true,
        items: [
          <MenuItem key='none' value='none'>No parent sections </MenuItem>
        ],
      };
    } else {
      return {
        disable: false,
        items: [
          <MenuItem key='none' value='none'>
            No parent section
          </MenuItem>,
          ...items,
        ]
      };
    }
  };

  getSiblings = () => {
    const { strategy = {}, strategies = [] } = this.props;

    let items = strategies
      .filter((item) => {
        const isSibling = item.parentId === strategy.parentId;
        const isNotSelf = item.id !== strategy.id;
        return isSibling && isNotSelf;
      })
      .map((item, key) => {
        return <MenuItem key={key} value={item.id}>
          {item.id}. &nbsp;{item.title}
        </MenuItem>
      });

    if (items.length === 0) {
      return {
        disable: true,
        items: [
          <MenuItem key='none' value='none'>No sibling sections </MenuItem>
        ],
      };
    } else {
      return {
        disable: false,
        items: [
          <MenuItem key='none' value='none'>
            No previous section
          </MenuItem>,
          ...items,
        ]
      };
    }
  };

  getValue = (property) => {
    return typeof property === 'number' ? property : 'none';
  };

  render() {
    const { match, strategy = {} } = this.props;
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
        // SelectProps: { MenuProps: { className: classes.selectMenu } },
        size: { md: 6, xs: 12 },
        type: 'select',
        value: sibling,
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
        value: (strategy.content && strategy.content.body) || '',
        variant: 'outlined',
      }
    ];

    let text = '';
    if ( isExist ) {
      text = 'Update Strategy';
    } else {
      text = 'Create Strategy';
    }

    return <ReportForm
      cancelButton={isExist ? 'Delete Strategy' : null}
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
  strategy: state.strategies.currentItem,
  strategies: state.strategies.items,
});

export default connect(select)(ProfileStrategy);