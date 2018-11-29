import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    '&:first-child': {
      paddingTop: theme.spacing.unit * 6,
    }
  },
  strategyHeader: {
    fontWeight: 500,
  }
});

class StrategyHeader extends Component {
  render() {
    const { classes, children, variant } = this.props;

    return <Grid className={classes.root} container justify='center'>
      <Grid item xl={5} md={6} xs={12}>
        <Typography
          align='left'
          className={classes.strategyHeader}
          variant={variant}>
          {children}
        </Typography>
      </Grid>
    </Grid>;
  }
}

StrategyHeader.defaultProps = {
  variant: 'h4',
};

export default withStyles(styles)(StrategyHeader);