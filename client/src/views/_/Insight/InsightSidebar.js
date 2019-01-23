import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  sidebar: {
    marginBottom: theme.spacing.unit * 5,
    marginTop: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
  sidebarHeading: {
    color: theme.palette.blue,
    fontWeight: 300,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 3,
  },
});

// eslint-disable-next-line
class InsightSidebar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Hidden smDown>
        <Grid className={classes.sidebar} item md={4} xl={3}>
          <Paper>
            <Typography className={classes.sidebarHeading} variant='subtitle1'>
              <FormattedMessage id='insights.trending.title' />
            </Typography>
          </Paper>
        </Grid>
      </Hidden>
    );
  }
}

InsightSidebar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(InsightSidebar);