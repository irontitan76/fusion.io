import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  contactLocations: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
    paddingBottom: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
  },
});

class ContactLocations extends Component {
  renderLocation = () => {
    return (
      <Typography align='left'>
        <b>Fusion Industries HQ1</b>
        <br />
      The Domain
        <br />
      Austin, Texas 78758
      </Typography>
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.contactLocations} container justify='center'>
        <Grid item md={6} xs={12}>
          <Typography gutterBottom variant='h6'>
            <FormattedMessage id='contact.locations.title' />
          </Typography>
          {this.renderLocation()}
        </Grid>
      </Grid>
    );
  }
}

ContactLocations.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(ContactLocations);
