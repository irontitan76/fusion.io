import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import {
  changeInsight,
  loadInsight,
  unloadInsight,
  updateInsight,
} from 'actions/insights';

const styles = theme => ({
  content: {
    fontFamily: 'Inconsolata, Monaco, Consolas, "Courier New", Courier;',
    fontSize: 12,
  },
  root: {
    height: '100%',
  },
  postContainer: {
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

class ProfilePostEdit extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(loadInsight(match.params.itemId));
  };

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(unloadInsight());
  };

  onChange = (event) => {
    const { dispatch } = this.props;
    const { name, value } = event.target;
    dispatch(changeInsight(name, value));
  };

  onSubmit = () => {
    const { dispatch, insight } = this.props;
    dispatch(updateInsight(insight));
  };

  render() {
    const { classes, insight } = this.props;

    return <Grid
      className={classes.root}
      container
      justify='flex-start'>

      <Grid item md={9} xs={12}>
        <Typography
          className={classes.title}
          variant='h6'>
          Edit Insight
        </Typography>
      </Grid>

      <Grid item md={8}>
        <Grid container>
          <Grid className={classes.postContainer} item xs={12}>
            <TextField
              fullWidth
              label='Title'
              name='title'
              onChange={this.onChange}
              placeholder='Type title here...'
              type='text'
              value={insight.title || ''}
              variant='outlined' />
          </Grid>

          <Grid className={classes.postContainer} item xs={12}>
            <TextField
              fullWidth
              label='Subtitle'
              name='subtitle'
              onChange={this.onChange}
              placeholder='Type subtitle here (optional)...'
              type='text'
              value={insight.subtitle || ''}
              variant='outlined' />
          </Grid>

          <Grid className={classes.postContainer} item xs={6}>
            <TextField
              fullWidth
              label='Status'
              name='status'
              select
              type='text'
              value={insight._publishedAt ? 1 : 0}
              variant='outlined'>
              <MenuItem value={0}>Draft</MenuItem>
              <MenuItem value={1}>Published</MenuItem>
            </TextField>
          </Grid>

          <Grid className={classes.postContainer} item xs={6}>
            <TextField
              disabled
              fullWidth
              label='Slug'
              name='slug'
              type='text'
              value={insight.slug || ''}
              variant='outlined' />
          </Grid>

          <Grid className={classes.postContainer} item xs={12}>
            <TextField
              InputProps={{
                className: classes.content,
              }}
              fullWidth
              label='Content'
              multiline
              name='content'
              onChange={this.onChange}
              placeholder='Type content here...'
              rows={20}
              type='text'
              value={insight.content || ''}
              variant='outlined' />
          </Grid>

          <Grid className={classes.postContainer} item xs={12}>
            <Button
              color='primary'
              onClick={this.onSubmit}
              variant='contained'>
              Update Insight
            </Button>
          </Grid>
        </Grid>
      </Grid>

    </Grid>;
  }
}

const select = state => ({
  message: state.messages,
  insight: state.insights.selected,
});

export default withStyles(styles)(connect(select)(ProfilePostEdit));