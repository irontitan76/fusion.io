import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Box from 'components/Box';
import Footer from 'components/Footer';
import SearchBar from 'components/SearchBar';

import { careersManifest } from 'common/manifests';

const styles = theme => ({
  appBar: {
    backgroundColor: '#f2f2f2',
    zIndex: 0,
  },
  heading: {
    fontWeight: 300,
    padding: `${theme.spacing.unit * 12}px ${theme.spacing.unit * 3}px`
  },
  root: {

  },
  title: {
    fontWeight: 300,
    marginBottom: theme.spacing.unit * 3,
    textDecoration: 'none'
  },
  toolbar: {

  }
});

export class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Grid
          alignItems='center'
          className={classes.root}
          container
          direction='column'
          justify='center'>

          <AppBar className={classes.appBar} position='static'>
            <Toolbar className={classes.toolbar}>

              <Grid container justify='center'>
                <Grid item xl={3} md={5} xs={12}>
                  <SearchBar placeholder='Search jobs' />
                </Grid>
              </Grid>

            </Toolbar>
          </AppBar>

          <Grid
            alignItems='center'
            container
            directon='column'
            justify='center'>

            <Grid item xl={4} md={6} xs={12}>
              <Typography
                align='center'
                className={classes.heading}
                paragraph
                variant='display1'>
                {careersManifest.slogan}
              </Typography>
            </Grid>

            <Grid item md={11} xs={12}>
              <Box data={careersManifest.teams} />
            </Grid>

          </Grid>

        </Grid>

        <Footer />
      </>
    );
  }
}

Home.defaultProps = {};
Home.propTypes = {};

export default withStyles(styles)(Home);