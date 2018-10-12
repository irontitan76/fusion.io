import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  contact: {},
  contactHeader: {
    backgroundColor: theme.palette.blue,
    color: theme.palette.common.white,
    paddingBottom: theme.spacing.unit * 10,
    paddingTop: theme.spacing.unit * 10,
  },
  contactHeaderTypography: {
    color: 'inherit',
    fontWeight: 300,
  },
});

export class Contact extends Component {
  render() {
    const { classes, subtitle, title } = this.props;

    return <Grid
      className={classes.contactHeader}
      item
      xs={12}>
      <Typography
        align='center'
        className={classes.contactHeaderTypography}
        gutterBottom
        variant='h3'>
        {title}
      </Typography>
      <Typography
        align='center'
        className={classes.contactHeaderTypography}>
        {subtitle}
      </Typography>
    </Grid>
  }
}

export default withStyles(styles)(Contact);

