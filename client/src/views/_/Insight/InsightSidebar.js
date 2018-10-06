import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  sidebar: {
    marginBottom: theme.spacing.unit * 5,
    marginTop: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
  sidebarHeading: {
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 3,
  }
});

class Sample extends Component {
  render() {
    const { classes } = this.props;

    return <Grid className={classes.sidebar} item md={4} xs={0}>
      <Paper>
        <Typography
          className={classes.sidebarHeading}
          variant='subheading'>
          Trending
        </Typography>
      </Paper>
    </Grid>;
  }
}

export default withStyles(styles)(Sample);