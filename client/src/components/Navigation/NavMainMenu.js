import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import NavDrawer from './NavDrawer';
import NavItems from './NavItems';

const styles = theme => ({
  list: {
    width: 250,
  },
  toolbar: theme.mixins.toolbar,
});

const NavMainMenu = (props) => {
  const { classes, items, onClose, open } = props;

  const menu = (
    <div className={classes.list}>
      <NavItems items={items} onClose={onClose} />
    </div>
  );

  return <NavDrawer content={menu} onClose={onClose} open={open} />;
};


NavMainMenu.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default withStyles(styles)(NavMainMenu);