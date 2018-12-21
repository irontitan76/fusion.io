import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';

import { endSession } from 'actions/session';

const styles = theme => ({
  listSize: {
    fontSize: '0.8125rem'
  },
  menuButton: {
    '&:hover': {
      height: 'auto',
      width: 'auto',   }
  },
  menuLink: {
    '&:hover': {
      color: theme.palette.blue,
    }
  }
});

export class NavUserMenu extends Component {
  state = {
    anchorEl: null,
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClick = (name) => {
    const { dispatch } = this.props;
    if ( name === 'Sign out' ) {
      dispatch(endSession());
    }
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { auth, classes, items } = this.props;
    const open = Boolean(anchorEl);

    if (!auth) {
      return <Button
        className={classes.menuLink}
        color='primary'
        component={Link}
        onClick={this.handleChange}
        to='/login'>
        Login
      </Button>;
    }

    const menuItems = items.map((item, key) => (
      <MenuItem
        component={Link}
        key={key}
        onClick={() => this.handleClick(item.name)}
        to={item.path}
        style={{ fontSize: '.8125rem' }}>
        <ListItemIcon>{ item.icon }</ListItemIcon>
        <ListItemText
          inset
          primary={item.name}
          primaryTypographyProps={{ className: classes.listSize }} />
      </MenuItem>
    ));

    return <>
      <IconButton
        aria-owns={open ? 'menu-appbar' : null}
        aria-haspopup='true'
        className={classes.menuButton}
        onClick={this.handleMenu}
        color='default'>
        <img
          alt='avatar'
          height='30px'
          onClick={this.handleMenu}
          src='./images/city.jpg'
          style={{ borderRadius: '50%' }}
          width='30px' />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
        open={open}
        onClose={this.handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}>
        {menuItems}
      </Menu>
    </>;
  }
}

NavUserMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

const select = state => ({
  auth: state.session.auth,
});

export default withStyles(styles)(connect(select)(NavUserMenu));