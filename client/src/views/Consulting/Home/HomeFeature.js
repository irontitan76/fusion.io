import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({});

// eslint-disable-next-line
class HomeFeature extends Component {
  render() {
    return (
      <Grid container justify='center'>
        <Grid item xs={12}>
          <Typography align='center' variant='h6'>
          Features
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant='subtitle1'>
          Social
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

HomeFeature.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(HomeFeature);