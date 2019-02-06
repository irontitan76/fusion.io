import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  contact: {},
  contactHeader: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    paddingBottom: theme.spacing.unit * 10,
    paddingTop: theme.spacing.unit * 10,
  },
  contactHeaderTypography: {
    color: 'inherit',
    fontWeight: 300,
  },
});

class Contact extends Component {
  renderHeader = () => {
    const { classes, subtitle, title } = this.props;

    return (
      <>
        <Typography
          align='center'
          className={classes.contactHeaderTypography}
          gutterBottom
          variant='h3'
        >
          {title}
        </Typography>
        <Typography align='center' className={classes.contactHeaderTypography}>
          {subtitle}
        </Typography>
      </>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.contactHeader} item xs={12}>
        {this.renderHeader()}
      </Grid>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Contact);
