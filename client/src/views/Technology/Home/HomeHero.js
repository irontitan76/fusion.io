import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  hero: {
    backgroundImage: 'url("/images/minimal.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    border: `1px solid ${theme.palette.background.paper}`,
    height: 600,
    marginBottom: theme.spacing.unit * 5,
    marginTop: theme.spacing.unit * 5,
    overflow: 'hidden',
    [theme.breakpoints.down('xl')]: {
      backgroundSize: '100% 130%',
    },
    [theme.breakpoints.down('lg')]: {
      height: 450,
    },
    [theme.breakpoints.down('sm')]: {
      backgroundSize: '180% 120%',
      marginTop: 0,
    },
  },
  heroContent: {
    backgroundColor: 'rgba(0,0,0,.25)',
    color: theme.palette.common.white,
    height: '100%',
    paddingBottom: theme.spacing.unit * 12,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit,
  },
  heroIcon: {
    color: theme.palette.common.white,
    fontSize: '10rem',
    marginBottom: theme.spacing.unit * 3,
    [theme.breakpoints.down('xs')]: {
      fontSize: '6rem',
    },
  },
  heroTitle: {
    color: theme.palette.common.white,
    fontSize: 32,
    fontWeight: 300,
    letterSpacing: 20,
    textIndent: 28,
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
});

// eslint-disable-next-line
class HomeHero extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container justify='center'>
        <Grid className={classes.hero} item lg={11} md={10} xs={12} xl={8}>
          <Grid
            alignItems='center'
            className={classes.heroContent}
            container
            direction='column'
            justify='center'
          >

            <FontAwesomeIcon
              className={classes.heroIcon}
              icon={['fal', 'code']}
            />

            <Typography
              align='center'
              className={classes.heroTitle}
              gutterBottom
              variant='h4'
            >
            FUSION TECHNOLOGY
            </Typography>

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