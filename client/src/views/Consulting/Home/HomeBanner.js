import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import { FormattedMessage } from 'react-intl';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
  banner: {
    backgroundColor: theme.palette.offwhite,
    borderBottom: `1px solid ${theme.palette.lightgray}`,
    borderTop: `1px solid ${theme.palette.lightgray}`,
    marginBottom: theme.spacing.unit * 5,
    minHeight: 175,
    paddingTop: theme.spacing.unit * 3,
  },
  bannerButton: {
    textAlign: 'center',
  },
  bannerButtonContainer1: {
    marginBottom: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit * 5,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginTop: theme.spacing.unit * 3,
    },
  },
  bannerButtonContainer2: {
    marginBottom: theme.spacing.unit * 5,
  },
  bannerDescription: {},
  bannerDescriptionText: {
    fontWeight: 300,
  },
});

// eslint-disable-next-line
class HomeServices extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        alignItems='center'
        className={classes.banner}
        container
        justify='center'
      >

        <Grid
          className={classes.bannerDescription}
          item
          md={6}
          sm={7}
          xs={10}
        >

          <Typography
            align='center'
            className={classes.bannerDescriptionText}
            variant='subtitle1'
          >
            <FormattedMessage id='consult.home.banner.description' />
          </Typography>

        </Grid>

        <Grid item xs={7}>

          <Grid container justify='center'>

            <Grid
              className={classes.bannerButtonContainer1}
              item
              md={3}
              xs={12}
            >
              <Button
                aria-label={<FormattedMessage id='consult.home.banner.button[0].label' />}
                className={classes.bannerButton}
                color='primary'
                component={Link}
                fullWidth
                to='/contact'
                variant='contained'
              >
                <FormattedMessage id='consult.home.banner.button[0].label' />
              </Button>
            </Grid>

            <Grid
              className={classes.bannerButtonContainer2}
              item
              md={3}
              xs={12}
            >
              <Button
                aria-label={<FormattedMessage id='consult.home.banner.button[1].label' />}
                className={classes.bannerButton}
                color='secondary'
                component={Link}
                fullWidth
                to='/insights?group=consulting'
                variant='contained'
              >
                <FormattedMessage id='consult.home.banner.button[1].label' />
              </Button>
            </Grid>

          </Grid>

        </Grid>
      </Grid>
    );
  }
}

HomeServices.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(HomeServices);