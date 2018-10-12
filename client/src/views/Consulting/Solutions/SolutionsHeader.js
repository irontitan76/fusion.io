import React, { Component } from 'react';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  servicesHeader: {

  },
  servicesTitle: {
    paddingBottom: theme.spacing.unit * 5,
    paddingTop: theme.spacing.unit * 5,
  },
  servicesTypography: {
    color: '#111',
  },
});

class SolutionsHeader extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        className={classes.servicesHeader}
        container
        justify='center'>

        <Grid
          className={classes.servicesTitle}
          item
          xs={12}>
          <Typography
            align='center'
            className={classes.servicesTypography}
            variant='h4'>
            Our Solutions
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Divider />
          Hello
        </Grid>

      </Grid>
    )
  }
}

export default withStyles(styles)(SolutionsHeader);