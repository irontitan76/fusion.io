import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'react-intl';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => {
  const { breakpoints, palette, spacing } = theme;

  const isDark = theme.palette.type === 'dark';

  return {
    hero: {
      backgroundImage: 'url("/images/city.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      height: 750,
      marginBottom: spacing.unit * 3,
      overflow: 'hidden',
      [breakpoints.down('xl')]: {
        backgroundSize: '100% 120%',
      },
      [breakpoints.down('lg')]: {
        height: 550,
      },
      [breakpoints.down('xs')]: {
        backgroundSize: '180% 120%',
      },
    },
    heroButton: {
      '&:hover': {
        backgroundColor: `${isDark ? palette.dark : palette.light}dd`,
        color: palette.blue,
      },
      backgroundColor: `${isDark ? palette.dark : palette.light}80`,
      borderColor: `${isDark ? palette.dark : palette.light}aa`,
      color: '#fff',
      marginBottom: spacing.unit * 2,
    },
    heroContent: {
      backgroundColor: 'rgba(0,0,0,.35)',
      color: palette.common.white,
      height: '100%',
      padding: `${spacing.unit * 5}px ${spacing.unit * 2}px`,
    },
    heroIcon: {
      color: palette.light,
      fontSize: '10rem',
      marginBottom: spacing.unit * 3,
      [breakpoints.down('xs')]: {
        fontSize: '6rem',
      },
    },
    heroSubtitle: {
      color: palette.light,
      fontSize: 24,
      fontWeight: 500,
      marginBottom: spacing.unit * 4,
      [breakpoints.down('xs')]: {
        fontSize: 16,
      },
    },
    heroTitle: {
      color: palette.light,
      fontSize: 32,
      fontWeight: 300,
      letterSpacing: 20,
      textIndent: 28,
      [breakpoints.down('xs')]: {
        fontSize: 20,
      },
    },
  };
};

// eslint-disable-next-line
class HomeHero extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        className={classes.hero}
        container
        justify='center'
      >
        <Grid item xs={12}>
          <Grid
            alignItems='center'
            className={classes.heroContent}
            container
            direction='column'
            justify='center'
          >

            <FontAwesomeIcon className={classes.heroIcon} icon={['fal', 'atom-alt']} />

            <Typography
              align='center'
              className={classes.heroTitle}
              gutterBottom
              variant='h4'
            >
              <FormattedMessage id='company.shortname' />
            </Typography>

            <Typography
              align='center'
              className={classes.heroSubtitle}
              gutterBottom
              variant='h4'
            >
              <FormattedMessage id='company.slogan' />
            </Typography>

            <Grid container justify='center' spacing={24}>

              <Grid item lg={3} sm={6} xl={3} xs={10}>
                <Button
                  className={classes.heroButton}
                  color='default'
                  component={Link}
                  fullWidth
                  to='/about'
                  variant='outlined'
                >
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
                  variant='outlined'
                >
                  <FormattedMessage id='home.hero.button[1].label' />
                </Button>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    );
  }
}

HomeHero.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(HomeHero);