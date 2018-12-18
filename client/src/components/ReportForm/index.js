import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Message from 'components/Message';
import ReportFormDialog from './ReportFormDialog';

const styles = theme => ({
  content: {
    fontFamily: 'Inconsolata, Monaco, Consolas, "Courier New", Courier;',
    fontSize: 12,
  },
  root: {
    height: '100%',
  },
  selectMenu: {
    maxHeight: 400,
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
})

class ProfileStandard extends Component {
  getParents = () => {
    const { sections = [] } = this.props;

    let items = sections.map((item, key) => {
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
    const { section = {}, sections = [] } = this.props;

    let items = sections
      .filter(item => {
        return (item.parentId === section.parentId) && (item.id !== section.id)
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

  renderContent = () => {
    const { section: { content } } = this.props;

    let result = '';
    return content.map((item, index) => {

      switch (item.type) {
        case 'md':
        default:
          result = '';
          break;
      }

      if ( index !== content.length - 1 ) {
        result += '\n';
      }

      return result;
    });
  };

  render() {
    const {
      classes,
      deleteText,
      name,
      onChange,
      onDelete,
      onSubmit,
      section = {},
      submitText,
    } = this.props;

    const parents = this.getParents();
    const parent = this.getValue(section.parentId);

    const siblings = this.getSiblings();
    const sibling = this.getValue(section.siblingId);

    return <>
      <Grid
        className={classes.root}
        container
        justify='flex-start'>

        <Grid item md={8} xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                className={classes.title}
                variant='h6'>
                {name}
              </Typography>
            </Grid>

            <Grid className={classes.standardContainer} item xs={12}>
              <TextField
                fullWidth
                label='Title'
                name='title'
                onChange={onChange}
                placeholder='Type the section title here...'
                type='text'
                value={section.title || ''}
                variant='outlined' />
            </Grid>

            <Grid className={classes.standardContainer} item md={6} xs={12}>
              <TextField
                disabled={parents.disable}
                fullWidth
                label='Parent Section'
                name='parentId'
                onChange={onChange}
                placeholder='Select the parent section'
                select
                SelectProps={{ MenuProps: { className: classes.selectMenu } }}
                value={parent}
                variant='outlined'>
                {parents.items}
              </TextField>
            </Grid>

            <Grid className={classes.standardContainer} item md={6} xs={12}>
              <TextField
                disabled={siblings.disable}
                fullWidth
                label='Previous Section'
                name='siblingId'
                onChange={onChange}
                placeholder='Select the parent section'
                select
                SelectProps={{ MenuProps: { className: classes.selectMenu } }}
                value={sibling}
                variant='outlined'>
                {siblings.items}
              </TextField>
            </Grid>

            <Grid className={classes.standardContainer} item xs={12}>
              <TextField
                InputProps={{
                  className: classes.content,
                }}
                fullWidth
                label='Content'
                multiline
                name='content'
                onChange={onChange}
                placeholder='Type content here...'
                rows={20}
                type='text'
                value={(section.content && section.content.body) || ''}
                variant='outlined'
              />
            </Grid>

            <Grid className={classes.standardContainer} item xs={12}>
              <Grid container justify='space-between'>
                <Grid item md={3} xs={12}>
                  <Button
                    fullWidth
                    color='primary'
                    onClick={onSubmit}
                    variant='contained'>
                    {submitText}
                  </Button>
                </Grid>
                {
                  onDelete ? <Grid item md={3} xs={12}>
                    <ReportFormDialog
                      deleteText={deleteText}
                      onDelete={onDelete} />
                  </Grid> : null
                }

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Message />
    </>;
  }
}

export default withStyles(styles)(ProfileStandard);