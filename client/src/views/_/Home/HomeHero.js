import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'react-intl';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  hero: {
    backgroundImage: 'url("/images/city.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: 750,
    marginBottom: theme.spacing.unit * 3,
    overflow: 'hidden',
    [theme.breakpoints.down('xl')]: {
      backgroundSize: '100% 120%',
    },
    [theme.breakpoints.down('lg')]: {
      height: 550,
    },
    [theme.breakpoints.down('xs')]: {
      backgroundSize: '180% 120%',
    }
  },
  heroButton: {
    backgroundColor: 'rgba(255,255,255,.45)',
    color: '#fff',
    marginBottom: theme.spacing.unit * 2,
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,.9)',
      color: theme.palette.blue,
    }
  },
  heroContent: {
    backgroundColor: 'rgba(0,0,0,.35)',
    color: theme.palette.common.white,
    height: '100%',
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 2}px`
  },
  heroIcon: {
    color: theme.palette.common.white,
    fontSize: '10rem',
    marginBottom: theme.spacing.unit * 3,
    [theme.breakpoints.down('xs')]: {
      fontSize: '6rem'
    }
  },
  heroSubtitle: {
    color: theme.palette.common.white,
    fontSize: 24,
    fontWeight: 500,
    marginBottom: theme.spacing.unit * 4,
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
            icon={[ 'fal', 'atom-alt' ]} />

          <Typography
            align='center'
            className={classes.heroTitle}
            gutterBottom
            variant='h4'>
            <FormattedMessage id='company.shortname' />
          </Typography>

          <Typography
            align='center'
            className={classes.heroSubtitle}
            gutterBottom
            variant='h4'>
            <FormattedMessage id='company.slogan' />
          </Typography>

          <Grid
            container
            justify='center'
            spacing={24}>

            <Grid item lg={3} sm={6} xl={3} xs={10}>
              <Button
                className={classes.heroButton}
                color='default'
                component={Link}
                fullWidth
                to='/about'
                variant='outlined'>
                <FormattedMessage id='home.hero.button[0].label' />
              </Button>
            </Grid>

            <Grid item lg={3} sm={6} xl={3} xs={10}>
              <Button
                className={classes.heroButton}
                color='default'
                component={Link}
                fullWidth
                to='/strategy'
                variant='outlined'>
                <FormattedMessage id='home.hero.button[1].label' />
              </Button>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Grid>;
  };
}

export default withStyles(styles)(HomeHero);