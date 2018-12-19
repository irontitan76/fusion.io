import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Footer from 'components/Footer';

const styles = theme => ({
  heading: {
    color: '#fff',
    fontWeight: 300,
  },
  headingContainer: {
    paddingBottom: theme.spacing.unit * 7,
    paddingTop: theme.spacing.unit * 7,
  },
  infoContainer: {
    height: '100vh',
    paddingTop: theme.spacing.unit * 5,
  }
});

class Landing extends Component {
  render() {
    const { classes, location, theme } = this.props;

    const locationMap = {
      '/ai': {
        theme: theme.palette.ai,
        name: 'Fusion A.I.',
        info: 'Fusion A.I. is the 3rd phase in the Fusion Strategy.',
      },
      '/cosmos': {
        theme: theme.palette.cosmos,
        name: 'Fusion Cosmos',
        info: 'Fusion Cosmos is the 10th phase in the Fusion Strategy.',
      },
      '/energy': {
        theme: theme.palette.energy,
        name: 'Fusion Energy',
        info: 'Fusion Energy is the 8th phase in the Fusion Strategy',
      },
      '/finance': {
        theme: theme.palette.finance,
        name: 'Fusion Finance',
        info: 'Fusion Finance is the 5th phase in the Fusion Strategy.',
      },
      '/health': {
        theme: theme.palette.health,
        name: 'Fusion Health',
        info: 'Fusion Health is the 7th phase in the Fusion Strategy.',
      },
      '/legal': {
        theme: theme.palette.legal,
        name: 'Fusion Legal',
        info: 'Fusion Legal is the 6th phase in the Fusion Strategy.',
      },
      '/media': {
        theme: theme.palette.media,
        name: 'Fusion Media',
        info: 'Fusion Media is the 4th phase in the Fusion Strategy.',
      },
      '/transport': {
        theme: theme.palette.transport,
        name: 'Fusion Transport',
        info: 'Fusion Transport is the 9th phase in the Fusion Strategy.',
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
              variant='h2'>
              {org.name}
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