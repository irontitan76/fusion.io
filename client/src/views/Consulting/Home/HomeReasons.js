import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { reasons } from './home';

const styles = theme => ({
  reasons: {},
  reasonsBody: {
    fontSize: 18,
    fontWeight: 300,
  },
  reasonsStrategyContainer: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 5,
  },
  reasonsSubheading: {
    marginBottom: theme.spacing.unit * 3,
  },
  reasonsTitle: {
    color: theme.palette.dark,
    fontWeight: 500,
    marginBottom: theme.spacing.unit,
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
        md={8}
        xs={12}>
        <Typography
          align='left'
          className={classes.reasonsBody}
          variant='body1'>
          {strategy}
        </Typography>
        <Typography
          className={classes.reasonsBody}
          component='div'
          variant='body1'>
          <ul>
            <li>Our services deliver your project from ideation to the hands of customers fast and reliably</li>
            <li>With solution offerings for Web, Cloud, Data, A.I., Social and Reality, we provide the layers necessary to build success</li>
            <li>Flex is necessary to quickly grow &mdash; Fusion consultants can integrate with existing teams or be the first for new ones</li>
            <li>We deliver solutions for managing projects, creating development workflows, producing quality code, and more</li>
            <li>Our consultants go through rigorous training to deliver optimal business and technical solutions</li>
            <li>The loose coupling of code and organizational structure enables accelerated changes and efficient process</li>
            <li>With high cohesion, your code and teams are focused on one aspect of the overall product or solution</li>
          </ul>
        </Typography>
      </Grid>

    </Grid>;
  };
}

export default withStyles(styles)(HomeReasons);