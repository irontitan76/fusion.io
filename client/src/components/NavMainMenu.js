import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import NavDrawer from 'components/NavDrawer';
import NavItems from 'components/NavItems';

const styles = theme => ({
  list: {
    width: 250
  },
  root: {
    zIndex: 1
  },
  toolbar: theme.mixins.toolbar
});

export class NavMenu extends Component {
  render() {
    const { classes, items, onClose, open } = this.props;

    const menu = (
      <div className={classes.list}>
        <NavItems items={items} onClose={onClose}/>
      </div>
    );

    return (
      <NavDrawer
        content={ menu }
        onClose={ onClose }
        open={ open }
      />
    );
  }
}

NavMenu.defaultProps = {
  classes: {},
  onClose: null,
  open: false
};

NavMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default withStyles(styles)(NavMenu);