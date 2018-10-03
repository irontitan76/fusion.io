import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Box from 'components/Box';
import Footer from 'components/Footer';
import SearchBar from 'components/SearchBar';

import insightsManifest from './manifests/insights';

const styles = theme => ({
  appBar: {
    borderBottom: '1px solid #ccc',
    boxShadow: 'none'
  },
  container: {
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 5
  },
  root: {

  },
  title: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center'
    }
  },
  title1: {
    fontWeight: 500
  },
  title2: {
    color: '#0074D9',
    fontSize: 40
  },
  title3: {
    fontWeight: 500
  },
  toolbar: {
    backgroundColor: '#fff',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing.unit * 2
    }
  }
});

export class Insights extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        alignItems='center'
        className={classes.root}
        container
        justify='center'>


        <AppBar className={classes.appBar} position='sticky'>
          <Toolbar className={classes.toolbar}>
            <Grid container justify='space-between'>
              <Grid item md={9} xs={12}>
                <Typography
                  className={classes.title}
                  variant='title'>
                  <span className={classes.title1}>insights</span>
                  <span className={classes.title2}>.</span>
                  <span className={classes.title3}>engine</span>
                </Typography>
              </Grid>

              <Grid item md={3} xs={12}>
                <SearchBar placeholder='Search insights...' />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <Grid className={classes.container} item md={11} xs={12}>
          <Box data={insightsManifest.articles} />
        </Grid>

        <Footer />

      </Grid>
    );
  }
}

Insights.defaultProps = {};
Insights.propTypes = {};

export default withStyles(styles)(Insights);