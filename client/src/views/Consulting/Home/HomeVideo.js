import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { video } from './home';

const styles = theme => ({
  homeVideo: {
    backgroundColor: theme.palette.light,
    height: 550,
    marginBottom: theme.spacing.unit * 5,
  },
  homeVideoTitle: {
    color: theme.palette.dark,
    fontWeight: 500,
  },
  homeVideoTitleContainer: {
    marginBottom: theme.spacing.unit * 3,
  },
});

class HomeVideo extends Component {
  render() {
    const { classes } = this.props;
    const { title } = video;

    return <Grid container justify='center'>
      <Grid className={classes.homeVideoTitleContainer} item xs={12}>
        <Typography
          align='center'
          className={classes.homeVideoTitle}
          variant='h4'>
          {title}
        </Typography>
      </Grid>
      <Grid className={classes.homeVideo} item>
        <video height='100%'controls>
          <source src='./fusion-full.mov' type='video/mp4' />
        </video>
      </Grid>
    </Grid>;
  }
}

export default withStyles(styles)(HomeVideo);