import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  contactLocations: {
    backgroundColor: theme.palette.offwhite,
    height: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
  },
});

export class ContactLocations extends Component {
  render() {
    const { classes } = this.props;

    return <Grid
      className={classes.contactLocations}
      container
      justify='center'>
      <Grid item xs={12} md={6}>
        <Typography
          gutterBottom
          variant='title'>
          Our locations
        </Typography>
        <Typography
          align='left'>
          <b>Fusion Industries HQ1</b>
          <br />
          The Domain
          <br />
          Austin, Texas 78758
        </Typography>
      </Grid>
    </Grid>;
  }
}

export default withStyles(styles)(ContactLocations);

