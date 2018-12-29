import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';

import ReportForm from 'components/ReportForm';

import {
  loadMessage
} from 'actions/messages';

import {
  changeStandard,
  createStandard,
  loadStandard,
  loadStandards,
  removeStandard,
  unloadStandard,
  unloadStandards,
  updateStandard,
} from 'actions/standards';

const styles = theme => ({
  root: {
    height: '100%',
  },
  standardContainer: {
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 3,
  },
  title: {
    fontWeight: 400,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 3,
  }
});

class ProfileStandard extends Component {
  componentDidMount = () => {
    const { dispatch, match } = this.props;
    dispatch(loadStandard(match.params.itemId));
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
    dispatch(changeStandard(name, value));
  };

  onDelete = () => {
    const { dispatch, history, standard } = this.props;

    this.displayMessage(
      'Deleting Standard...',
      () => dispatch(removeStandard(standard._id)).then(() => {
        this.displayMessage(`Deleted Standard "${standard.title}".`);
        return setTimeout(() => history.push('/profile/standards'), 1000);
      })
    );
  };

  onUpdate = () => {
    const { dispatch, standard } = this.props;

    this.displayMessage(
      'Updating Standard...',
      () => dispatch(updateStandard(standard)).then(() => {
        return this.displayMessage(`Updated Standard "${standard.title}".`);
      })
    );
  };

  onCreate = () => {
    const { dispatch, item } = this.props;

    this.displayMessage(
      'Creating Standard...',
      () => dispatch(createStandard(item)).then(() => {
        return this.displayMessage(`Created Standard "${item.title}".`);
      })
    );
  };

  getParents = () => {
    const { standards = [] } = this.props;

    let items = standards.map((item, key) => {
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
    const { standard = {}, standards = [] } = this.props;

    let items = standards
      .filter((item) => {
        const isSibling = item.parentId === standard.parentId;
        const isNotSelf = item.id !== standard.id;
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
    const { match, standard = {} } = this.props;
    const isExist = match.params.itemId;

    const parents = this.getParents();
    const parent = this.getValue(standard.parentId);

    const siblings = this.getSiblings();
    const sibling = this.getValue(standard.siblingId);

    const fields = [
      {
        fullWidth: true,
        label: 'Title',
        name: 'title',
        onChange: this.onChange,
        placeholder: 'Type the section title here...',
        size: { xs: 12 },
        type: 'text',
        value: standard.title || '',
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
        value: (standard.content && standard.content.body) || '',
        variant: 'outlined',
      }
    ];

    let text = '';
    if ( isExist ) {
      text = 'Update Standard';
    } else {
      text = 'Create Standard';
    }

    return <ReportForm
      cancelButton={isExist ? 'Delete Standard' : null}
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
  standard: state.standards.currentItem,
  standards: state.standards.items,
});

export default withStyles(styles)(connect(select)(ProfileStandard));