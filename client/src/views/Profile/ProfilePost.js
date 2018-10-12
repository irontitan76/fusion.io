import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

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
  render() {
    const { classes } = this.props;

    return <Grid
      className={classes.root}
      container
      justify='flex-start'>

      <Grid item md={9} xs={12}>
        <Typography
          className={classes.title}
          variant='h6'>
          New Post
        </Typography>
      </Grid>

      <Grid className={classes.postContainer} item md={4} xs={12}>
        <Typography
          gutterBottom
          variant='subtitle1'>
          Title
        </Typography>
        <TextField
          fullWidth
          placeholder='Type title here...'
          type='text'
          variant='outlined'
        />
      </Grid>

      <Grid className={classes.postContainer} item md={4} xs={12}>
        <Typography
          gutterBottom
          variant='subtitle1'>
          Subtitle
        </Typography>
        <TextField
          fullWidth
          placeholder='Type subtitle here (optional)...'
          type='text'
          variant='outlined'
        />
      </Grid>

      <Grid className={classes.postContainer} item md={8} xs={12}>
        <Typography
          gutterBottom
          variant='subtitle1'>
          Content
        </Typography>
        <TextField
          fullWidth
          multiline
          placeholder='Type content here...'
          rows={20}
          type='text'
          variant='outlined'
        />
      </Grid>

      <Grid className={classes.postContainer} item md={9}>
        <Button
          color='primary'
          variant='contained'>
          Submit for Review
        </Button>
      </Grid>
    </Grid>;
  }
}

export default withStyles(styles)(ProfilePost);