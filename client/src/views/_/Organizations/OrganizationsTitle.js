import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  org: {
    color: theme.palette.offwhite,
    fontWeight: 300,
    marginBottom: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 10,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 3,
  },
  orgIcon: {
    paddingRight: theme.spacing.unit * 2,
  },
});

// eslint-disable-next-line
class OrganizationsTitle extends Component {
  render = () => {
    const { bgColor, classes, icon, theme, title } = this.props;

    return (
      <Typography
        align='left'
        className={classes.org}
        style={{ backgroundColor: theme.palette[bgColor || 'offwhite'] }}
        variant='h6'
      >
        <FontAwesomeIcon className={classes.orgIcon} icon={['fal', icon]} />
        {title}
      </Typography>
    );
  }
}

OrganizationsTitle.propTypes = {
  bgColor: PropTypes.string.isRequired,
  classes: PropTypes.shape({}).isRequired,
  icon: PropTypes.string.isRequired,
  theme: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(OrganizationsTitle);