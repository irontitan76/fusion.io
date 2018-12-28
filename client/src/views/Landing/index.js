import React, { Component } from 'react';
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
    position: 'fixed',
    top: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    color: '#f1f1f1',
    height: '100%',
    width: '100%',
    padding: 20,
  },
});

class Landing extends Component {
  render() {
    const { classes, location, theme } = this.props;

    const locationMap = {
      '/ai': {
        info: 'Fusion A.I. is the 3rd phase in the Fusion Strategy.',
        logo: [ 'fal', 'mind-share' ],
        name: 'Fusion AI',
        theme: theme.palette.ai,
      },
      '/cosmos': {
        info: 'Fusion Cosmos is the 10th phase in the Fusion Strategy.',
        name: 'Fusion Cosmos',
        logo: [ 'fal', 'space-shuttle' ],
        theme: theme.palette.cosmos,
      },
      '/energy': {
        info: 'Fusion Energy is the 8th phase in the Fusion Strategy',
        name: 'Fusion Energy',
        logo: [ 'fal', 'solar-panel' ],
        theme: theme.palette.energy,
      },
      '/finance': {
        info: 'Fusion Finance is the 5th phase in the Fusion Strategy.',
        name: 'Fusion Finance',
        logo: [ 'fal', 'credit-card-blank' ],
        theme: theme.palette.finance,
      },
      '/health': {
        info: 'Fusion Health is the 7th phase in the Fusion Strategy.',
        name: 'Fusion Health',
        logo: [ 'fal', 'dna' ],
        theme: theme.palette.health,
      },
      '/legal': {
        info: 'Fusion Legal is the 6th phase in the Fusion Strategy.',
        name: 'Fusion Legal',
        logo: [ 'fal', 'balance-scale' ],
        theme: theme.palette.legal,
      },
      '/media': {
        info: 'Fusion Media is the 4th phase in the Fusion Strategy.',
        name: 'Fusion Media',
        logo: [ 'fal', 'broadcast-tower' ],
        theme: theme.palette.media,
      },
      '/transport': {
        info: 'Fusion Transport is the 9th phase in the Fusion Strategy.',
        name: 'Fusion Transport',
        logo: [ 'fal', 'map-marked' ],
        theme: theme.palette.transport,
      },
    };

    const org = locationMap[location.pathname];

    return <>
      <main>
        <Grid container justify='center'>
          <Grid
            className={classes.headingContainer}
            item
            style={{ backgroundColor: org.theme.main }}
            xs={12}>

            <Typography
              align='center'
              className={classes.heading}
              component='div'
              variant='h3'>
              {
                org.logo && <FontAwesomeIcon
                className={classes.logo}
                icon={org.logo} />
              }
              {org.name.toUpperCase()}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify='center'>
          <Grid
            className={classes.infoContainer}
            item
            xs={12}>
            <Typography
              align='center'
              className={classes.info}
              variant='subtitle1'>
              {org.info}
            </Typography>
          </Grid>
        </Grid>

      </main>
      <Footer />
    </>;
  }
}

export default withStyles(styles, { withTheme: true })(Landing);