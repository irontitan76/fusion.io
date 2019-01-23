import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Footer from 'components/Footer';

const styles = theme => ({
  heading: {
    alignItems: 'center',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 300,
    letterSpacing: 15,
  },
  headingContainer: {
    paddingBottom: theme.spacing.unit * 7,
    paddingTop: theme.spacing.unit * 7,
  },
  infoContainer: {
    height: '100vh',
    paddingTop: theme.spacing.unit * 5,
  },
  logo: {
    fontSize: 64,
    marginBottom: theme.spacing.unit * 3,
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.5)',
    color: '#f1f1f1',
    height: '100%',
    padding: 20,
    position: 'fixed',
    top: 0,
    width: '100%',
  },
});

class Landing extends Component {
  get locationMap() {
    const { theme } = this.props;

    return {
      '/ai': {
        info: 'Fusion A.I. is the 3rd phase in the Fusion Strategy.',
        logo: ['fal', 'mind-share'],
        name: 'Fusion AI',
        theme: theme.palette.ai,
      },
      '/cosmos': {
        info: 'Fusion Cosmos is the 10th phase in the Fusion Strategy.',
        logo: ['fal', 'space-shuttle'],
        name: 'Fusion Cosmos',
        theme: theme.palette.cosmos,
      },
      '/energy': {
        info: 'Fusion Energy is the 8th phase in the Fusion Strategy',
        logo: ['fal', 'solar-panel'],
        name: 'Fusion Energy',
        theme: theme.palette.energy,
      },
      '/finance': {
        info: 'Fusion Finance is the 5th phase in the Fusion Strategy.',
        logo: ['fal', 'credit-card-blank'],
        name: 'Fusion Finance',
        theme: theme.palette.finance,
      },
      '/health': {
        info: 'Fusion Health is the 7th phase in the Fusion Strategy.',
        logo: ['fal', 'dna'],
        name: 'Fusion Health',
        theme: theme.palette.health,
      },
      '/legal': {
        info: 'Fusion Legal is the 6th phase in the Fusion Strategy.',
        logo: ['fal', 'balance-scale'],
        name: 'Fusion Legal',
        theme: theme.palette.legal,
      },
      '/media': {
        info: 'Fusion Media is the 4th phase in the Fusion Strategy.',
        logo: ['fal', 'broadcast-tower'],
        name: 'Fusion Media',
        theme: theme.palette.media,
      },
      '/transport': {
        info: 'Fusion Transport is the 9th phase in the Fusion Strategy.',
        logo: ['fal', 'map-marked'],
        name: 'Fusion Transport',
        theme: theme.palette.transport,
      },
    };
  }

  render() {
    const { classes, location } = this.props;
    const org = this.locationMap[location.pathname];

    return (
      <>
        <main>
          <Grid container justify='center'>
            <Grid
              className={classes.headingContainer}
              item
              style={{ backgroundColor: org.theme.main }}
              xs={12}
            >

              <Typography
                align='center'
                className={classes.heading}
                component='div'
                variant='h3'
              >
                {org.logo && <FontAwesomeIcon className={classes.logo} icon={org.logo} />}
                {org.name.toUpperCase()}
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify='center'>
            <Grid
              className={classes.infoContainer}
              item
              xs={12}
            >
              <Typography
                align='center'
                className={classes.info}
                variant='subtitle1'
              >
                {org.info}
              </Typography>
            </Grid>
          </Grid>
        </main>
        <Footer />
      </>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
};

export default withStyles(styles, { withTheme: true })(Landing);