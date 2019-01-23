import React from 'react';
import PropTypes from 'prop-types';

import Drawer from '@material-ui/core/Drawer';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    zIndex: theme.zIndex.drawer,
  },
  toolbar: theme.mixins.toolbar,
});

const NavDrawer = (props) => {
  const {
    anchor,
    classes,
    content,
    onClose,
    open,
    ...rest
  } = props;

  return (
    <Drawer
      anchor={anchor}
      className={classes.root}
      open={open}
      onClose={onClose}
      transitionDuration={400}
      {...rest}
    >
      <div className={classes.toolbar} />
      {content}
    </Drawer>
  );
};

NavDrawer.defaultProps = {
  anchor: 'left',
  open: false,
};

NavDrawer.propTypes = {
  anchor: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  content: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

export default withStyles(styles)(NavDrawer);