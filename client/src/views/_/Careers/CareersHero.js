import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

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
          variant='h4'>
          <span style={{ color: '#ff4136', fontWeight: 500 }}>Find </span>
          a job you love,
          <span style={{ color: '#0074d9', fontWeight: 500 }}> create </span>
          the future you want,
          <span style={{ color: '#ffdc00', fontWeight: 500 }}> explore </span>
          your unique passion, and
          <span style={{ color: '#3d9970', fontWeight: 500 }}> empower </span>
          billions.
        </Typography>
      </Grid>

    </Grid>;
  }
}

export default withStyles(styles)(CareersHero);