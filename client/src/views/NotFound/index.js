import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  notFound: {
    backgroundColor: theme.palette.offwhite,
    height: '100%',
    paddingBottom: theme.spacing.unit * 20,
  },
});

// eslint-disable-next-line
class NotFound extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid alignItems='center' className={classes.notFound} container justify='center'>
        <Grid item xs={12}>
          <Typography align='center' gutterBottom variant='h1'>
          Oops
          </Typography>
          <Typography align='center' variant='title'>
          Code 404: Page not found
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

NotFound.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(NotFound);