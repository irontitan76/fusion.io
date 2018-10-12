import React, { Component } from 'react';
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

class OrganizationsTitle extends Component {
  render = () => {
    const { bgColor, classes, icon, theme, title } = this.props;

    return <Typography
      align='left'
      className={classes.org}
      style={{ backgroundColor: theme.palette[bgColor || 'offwhite'] }}
      variant='h6'>
      <FontAwesomeIcon className={classes.orgIcon} icon={['fal', icon]} />
      {title}
    </Typography>;
  }
}

export default withStyles(styles, { withTheme: true })(OrganizationsTitle);