import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { hero } from './careers';

const styles = theme => ({
  hero: {},
  heroHeading: {
    fontWeight: 300,
    padding: `${theme.spacing.unit * 12}px ${theme.spacing.unit * 3}px`
  },
});

class CareersHero extends Component {
  render() {
    const { classes } = this.props;

    return <Grid
      alignItems='center'
      className={classes.hero}
      container
      directon='column'
      justify='center'>

      <Grid item xl={4} md={6} xs={12}>
        <Typography
          align='center'
          className={classes.heroHeading}
          paragraph
          variant='display1'>
          { hero.heading }
        </Typography>
      </Grid>

    </Grid>;
  }
}

export default withStyles(styles)(CareersHero);