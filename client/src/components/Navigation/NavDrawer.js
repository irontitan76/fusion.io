import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Drawer from '@material-ui/core/Drawer';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    zIndex: theme.zIndex.drawer
  },
  toolbar: theme.mixins.toolbar
});

export class NavDrawer extends Component {
  render() {
    const {
      anchor,
      classes,
      content,
      mini,
      onClose,
      open,
      ...props
    } = this.props;

    return <Drawer
      anchor={anchor}
      className={classes.root}
      open={open}
      onClose={onClose}
      transitionDuration={400}
      {...props}>
      <div className={classes.toolbar} />
      {content}
    </Drawer>;
  }
}

NavDrawer.defaultProps = {
  anchor: 'left',
  classes: {},
  content: {},
  onClose: null,
  open: false
};

NavDrawer.propTypes = {
  anchor: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  content: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
};

export default withStyles(styles)(NavDrawer);