import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Footer from 'components/Footer';

const styles = theme => ({
  root: {},
  standardMain: {
    backgroundColor: theme.palette.blue,
    height: 700,
  },
  standardTitle: {
    color: theme.palette.offwhite,
    fontWeight: 300,
  },
  standardTitleContainer: {
    backgroundColor: theme.palette.navy,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
  },
});

class Standard extends Component {
  render () {
    const { classes } = this.props;
    return <>
      <main style={{ height: '100%' }}>
        <Grid component='main' container style={{ height: '100%' }}>
          <Grid
            className={classes.standardTitleContainer}
            item
            xs={12}>

            <Typography
              align='center'
              className={classes.standardTitle}
              variant='h5'>
              The Fusion Standard
            </Typography>

          </Grid>

          <Grid
            className={classes.standardMain}
            item
            xs={12}
            style={{ height: 'calc(100% - 64px)' }}>
            <Grid
              alignItems='center'
              container
              justify='center'
              style={{ height: '100%' }}>
              <Grid item xs={12}>
                <Typography
                  align='center'
                  style={{ color: '#fff', fontWeight: 300, }}
                  variant='title'>
                  We believe in
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
      <Footer />
    </>
  }
}

export default withStyles(styles)(Standard);