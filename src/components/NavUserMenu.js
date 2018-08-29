import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';

import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  listSize: {
    fontSize: '0.8125rem'
  }
};

export class NavUserMenu extends Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = event => {
    this.setState({ auth: !this.state.auth });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.handleChange();
    this.setState({ anchorEl: null });
  };

  render() {
    const { auth, anchorEl } = this.state;
    const { classes, items } = this.props;
    const open = Boolean(anchorEl);

    return auth ? <>
      <IconButton
        aria-owns={open ? 'menu-appbar' : null}
        aria-haspopup='true'
        onClick={this.handleMenu}
        color='inherit'>
        <AccountCircle />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'bottom'
        }}
        open={open}
        onClose={this.handleClose}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top'
        }}>
        {
          items.map((item, key) => (
            <MenuItem
              component={Link}
              key={key}
              onClick={this.handleClose}
              to={item.path}
              style={{ fontSize: '.8125rem' }}>
              <ListItemIcon>
                { item.icon }
              </ListItemIcon>
              <ListItemText inset primary={item.name} primaryTypographyProps={{
                className: classes.listSize
              }} />
            </MenuItem>
          ))
        }
      </Menu>
    </> : <Button color='inherit' component={Link} onClick={this.handleChange} to='/login'>Login</Button>
  }
}

NavUserMenu.defaultProps = {};

NavUserMenu.propTypes = {
  // auth: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavUserMenu);