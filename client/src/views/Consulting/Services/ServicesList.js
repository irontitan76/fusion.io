import React, { Component } from 'react';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  servicesList: {
    marginBottom: theme.spacing.unit * 3,
  },
  servicesListGrid: {},
});

class ServicesList extends Component {
  render() {
    const { classes } = this.props;

    return <Grid
      className={classes.servicesList}>
      <Divider />

      <Grid
        className={classes.servicesListGrid}
        item
        xs={12}>

        <Typography
          variant='body1'>
          Services List
        </Typography>

      </Grid>
    </Grid>;
  }
}

export default withStyles(styles)(ServicesList);