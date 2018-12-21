import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
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

    return <Hidden smDown>
      <Grid className={classes.sidebar} item md={4} xl={3}>
        <Paper>
          <Typography
            className={classes.sidebarHeading}
            variant='subtitle1'>
            Trending
          </Typography>
        </Paper>
      </Grid>
    </Hidden>;
  }
}

export default withStyles(styles)(Sample);