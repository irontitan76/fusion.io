import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  divider: {
    backgroundColor: theme.palette.primary.main,
    height: 5,
    marginBottom: 15,
    marginTop: 15,
    width: 45,
  },
  reportHeader: {
    fontWeight: 500,
  },
  root: {
    '&:first-child': {
      paddingTop: theme.spacing.unit * 6,
    },
    backgroundColor: theme.palette.background.default,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
  },
});

class ReportHeader extends Component {
  get headingSizeMap() {
    return {
      'h1': 36,
      'h2': 28,
      'h3': 22,
      'h4': 18,
      'h5': 16,
      'h6': 14,
    };
  }

  render() {
    const { classes, children, divider, id, variant } = this.props;

    let line = null;
    if (divider) {
      line = <Divider className={classes.divider} />;
    }

    return  (
      <Grid className={classes.root} container id={id} justify='center'>
        <Grid item md={6} xl={5} xs={12}>
          <Typography
            align='left'
            className={classes.reportHeader}
            style={{ fontSize: this.headingSizeMap[variant] }}
            variant={variant}
          >
            {children}
          </Typography>
          {line}
        </Grid>
      </Grid>
    );
  }
}

ReportHeader.defaultProps = {
  divider: true,
  variant: 'h4',
};

ReportHeader.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({}).isRequired,
  divider: PropTypes.bool,
  id: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

export default withStyles(styles)(ReportHeader);