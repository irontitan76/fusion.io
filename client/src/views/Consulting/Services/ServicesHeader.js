import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

/* eslint-disable-next-line */
class ServicesHeader extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        className={classes.servicesHeader}
        container
        justify='center'
      >

        <Grid
          className={classes.servicesTitle}
          item
          xs={12}
        >
          <Typography
            align='center'
            className={classes.servicesTypography}
            variant='h4'
          >
            Our Services
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

ServicesHeader.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(ServicesHeader);