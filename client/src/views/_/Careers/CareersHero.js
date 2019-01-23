import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  blue: {
    color: theme.palette.blue,
    fontWeight: 500,
  },
  green: {
    color: theme.palette.green,
    fontWeight: 500,
  },
  hero: {
    backgroundColor: theme.palette.background.default,
  },
  heroHeading: {
    fontWeight: 300,
    padding: `${theme.spacing.unit * 12}px ${theme.spacing.unit * 3}px`,
  },
  red: {
    color: theme.palette.red,
    fontWeight: 500,
  },
  yellow: {
    color: theme.palette.yellow,
    fontWeight: 500,
  },
});

class CareersHero extends Component {
  renderMotto = () => {
    const { classes } = this.props;

    return (
      <Typography
        align='center'
        className={classes.heroHeading}
        paragraph
        variant='h4'
      >
        <span className={classes.red}>Find </span>
      a job you love,
        <span className={classes.blue}> create </span>
      the future you want,
        <span className={classes.yellow}> explore </span>
      your unique passion, and
        <span className={classes.green}> empower </span>
      billions.
      </Typography>
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid
        alignItems='center'
        className={classes.hero}
        container
        directon='column'
        justify='center'
      >
        <Grid item xl={4} md={6} xs={12}>
          {this.renderMotto()}
        </Grid>
      </Grid>
    );
  }
}

CareersHero.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(CareersHero);