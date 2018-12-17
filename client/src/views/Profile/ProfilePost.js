import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import {
  addInsight,
  changeInsight,
  loadInsight,
  unloadInsight,
} from 'actions/insights';

const styles = theme => ({
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

class ProfilePost extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(loadInsight());
  };

  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch(unloadInsight());
  };

  onChange = (event) => {
    const { dispatch } = this.props;
    const { name, value } = event.target;
    dispatch(changeInsight(name, value));
  }

  onSubmit = () => {
    const { dispatch, insight, user } = this.props;
    dispatch(addInsight(insight, user));
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
          New Insight
        </Typography>
      </Grid>

      <Grid item md={9}>
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

          <Grid className={classes.postContainer} item md={9}>
            <Button
              color='primary'
              onClick={this.onSubmit}
              variant='contained'>
              Submit for Review
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>;
  }
}

const select = state => ({
  insight: state.insights.selected,
  user: state.session.user,
});

export default withStyles(styles)(connect(select)(ProfilePost));