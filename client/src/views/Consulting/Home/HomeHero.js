import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { injectIntl } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  hero: {
    backgroundColor: theme.palette.blue,
    backgroundImage: 'url("/images/city2.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: 750,
    overflow: 'hidden',
    [theme.breakpoints.down('xl')]: {
      backgroundSize: '100% 180%',
    },
    [theme.breakpoints.down('lg')]: {
      height: 550,
    },
    [theme.breakpoints.down('xs')]: {
      backgroundSize: '180% 120%',
    }
  },
  heroContent: {
    backgroundColor: 'rgba(0,0,0,.3)',
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
    const { classes, intl } = this.props;

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
            icon={[ 'fal', 'users' ]} />

          <Typography
            align='center'
            className={classes.heroTitle}
            gutterBottom
            variant='h4'>
            { intl.formatMessage({id: 'consult.org.name' }).toUpperCase() }
          </Typography>

        </Grid>
      </Grid>
    </Grid>;
  };
}

export default withStyles(styles)(injectIntl(HomeHero));