import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  strategyContent: {}
});

class Sample extends Component {
  render() {
    const { classes, children } = this.props;

    return <Grid className={classes.root} container justify='center'>
      <Grid item xl={5} md={6} xs={12}>
        <Typography
          className={classes.strategyContent}
          variant='body1'>
          {children}
        </Typography>
      </Grid>
    </Grid>;
  }
}

export default withStyles(styles)(Sample);