import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { reasons } from './home';

const styles = theme => ({
  reasons: {},
  reasonsStrategyContainer: {
    marginBottom: theme.spacing.unit * 5,
  },
  reasonsSubheading: {
    marginBottom: theme.spacing.unit * 3,
  },
  reasonsTitle: {
    color: theme.palette.dark,
  },
  reasonsTitleContainer: {},
});

class HomeReasons extends Component {
  render() {
    const { classes } = this.props;
    const { strategy, subtitle, title } = reasons;

    return <Grid
      alignItems='center'
      className={classes.reasons}
      container
      justify='center'>

      <Grid
        className={classes.reasonsTitleContainer}
        item
        xs={12}>
        <Typography
          align='center'
          className={classes.reasonsTitle}
          variant='h4'>
          {title}
        </Typography>
        <Typography
          align='center'
          className={classes.reasonsSubheading}
          variant='subtitle1'>
          {subtitle}
        </Typography>
      </Grid>

      <Grid
        className={classes.reasonsStrategyContainer}
        item
        xs={8}>
        <Typography
          align='center'>
          {strategy}
        </Typography>
      </Grid>

    </Grid>;
  };
}

export default withStyles(styles)(HomeReasons);