import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { hero } from '../manifests/home';

const styles = theme => ({
  hero: {
    backgroundImage: 'url("/images/desk.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: 550,
    marginBottom: theme.spacing.unit * 5,
    overflow: 'hidden',
    [theme.breakpoints.down('xl')]: {
      backgroundSize: '100% 180%',
    },
    [theme.breakpoints.down('xs')]: {
      backgroundSize: '180% 120%',
    }
  },
  heroButton: {
    backgroundColor: 'rgba(0,0,0,.45)',
    color: '#fff',
    marginBottom: theme.spacing.unit * 2
  },
  heroContent: {
    backgroundColor: 'rgba(0,0,0,.4)',
    color: theme.palette.common.white,
    height: '100%',
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 2}px`
  },
  heroIcon: {
    color: theme.palette.common.white,
    fontSize: '10rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '6rem'
    }
  },
  heroSubtitle: {
    color: theme.palette.common.white,
    fontSize: 26,
    fontWeight: 400,
    marginBottom: theme.spacing.unit * 3,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16
    }
  },
  heroTitle: {
    color: theme.palette.common.white,
    fontSize: 32,
    fontWeight: 300,
    letterSpacing: 20,
    textIndent: 28,
    [theme.breakpoints.down('xs')]: {
      fontSize: 20
    }
  },
});

class HomeHero extends Component {
  render() {
    const { classes } = this.props;
    const { button1, button2, icon, subtitle, title } = hero;

    return <Grid
      className={classes.hero}
      container
      justify='center'>
      <Grid item xs={12}>
        <Grid
          alignItems='center'
          className={classes.heroContent}
          container
          direction='column'
          justify='center'>

          <FontAwesomeIcon
            className={classes.heroIcon}
            icon={ icon }
          />

          <Typography
            align='center'
            className={classes.heroTitle}
            gutterBottom
            variant='display1'>
            { title }
          </Typography>

          <Typography
            align='center'
            className={classes.heroSubtitle}
            gutterBottom
            variant='display1'>
            { subtitle }
          </Typography>

          <Grid
            container
            justify='center'
            spacing={24}>

            <Grid item lg={4} sm={6} xl={3} xs={10}>
              <Button
                className={classes.heroButton}
                color='default'
                component={Link}
                fullWidth
                to={ button1.path }
                variant='outlined'>
                { button1.label }
              </Button>
            </Grid>

            <Grid item lg={4} sm={6} xl={3} xs={10}>
              <Button
                className={classes.heroButton}
                color='default'
                component={Link}
                fullWidth
                to={ button2.path }
                variant='outlined'>
                { button2.label }
              </Button>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Grid>;
  };
}

HomeHero.defaultProps ={};
HomeHero.propTypes = {};

export default withStyles(styles)(HomeHero);