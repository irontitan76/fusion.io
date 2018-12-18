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
});

class Landing extends Component {
  render() {
    const { classes, location, theme } = this.props;

    const locationMap = {
      '/ai': {
        theme: theme.palette.ai,
        name: 'Fusion A.I.'
      },
      '/cosmos': {
        theme: theme.palette.cosmos,
        name: 'Fusion Cosmos'
      },
      '/energy': {
        theme: theme.palette.energy,
        name: 'Fusion Energy'
      },
      '/finance': {
        theme: theme.palette.finance,
        name: 'Fusion Finance'
      },
      '/health': {
        theme: theme.palette.health,
        name: 'Fusion Health'
      },
      '/legal': {
        theme: theme.palette.legal,
        name: 'Fusion Legal'
      },
      '/media': {
        theme: theme.palette.media,
        name: 'Fusion Media'
      },
      '/transport': {
        theme: theme.palette.transport,
        name: 'Fusion Transport'
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
      </main>
      <Footer />
    </>;
  }
}

export default withStyles(styles, { withTheme: true })(Landing);