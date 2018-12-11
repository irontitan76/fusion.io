import React, { Component } from 'react';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import RootRef from '@material-ui/core/RootRef';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  divider: {
    backgroundColor: '#0074D9',
    height: 5,
    marginBottom: 15,
    marginTop: 15,
    width: 45,
  },
  root: {
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    '&:first-child': {
      paddingTop: theme.spacing.unit * 6,
    }
  },
  reportHeader: {
    fontWeight: 500,
  }
});

class ReportHeader extends Component {
  render() {
    const { classes, children, divider, reference, variant } = this.props;

    let line = null;
    if ( divider ) {
      line = <Divider className={classes.divider} />;
    }

    const content = (
      <Grid className={classes.root} container justify='center'>
        <Grid item xl={5} md={6} xs={12}>
          <Typography
            align='left'
            className={classes.reportHeader}
            variant={variant}>
            {children}
          </Typography>
          {line}
        </Grid>
      </Grid>
    );

    if ( reference ) {
      return <RootRef rootRef={reference}>
        {content}
      </RootRef>;
    } else {
      return content;
    }
  }
}

ReportHeader.defaultProps = {
  divider: true,
  variant: 'h4',
};

export default withStyles(styles)(ReportHeader);