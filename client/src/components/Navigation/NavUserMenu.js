import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';

import { endSession } from 'actions/session';

const styles = theme => ({
  listSize: {
    fontSize: '0.8125rem',
  },
  menuButton: {
    '&:hover': {
      height: 'auto',
      width: 'auto',
    },
  },
  menuLink: {
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
});

class NavUserMenu extends Component {
  state = { anchorEl: null };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClick = (name) => {
    const { dispatch } = this.props;
    if (name === 'Sign out') {
      dispatch(endSession());
    }
    this.setState({ anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { auth, classes, items } = this.props;
    const open = Boolean(anchorEl);

    if (!auth) {
      return (
        <IconButton
          className={classes.menuLink}
          color='primary'
          component={Link}
          onClick={this.handleChange}
          to='/login'
        >
          <FontAwesomeIcon icon={['fal', 'sign-in']} />
        </IconButton>
      );
    }

    const menuItems = items.map((item) => (
      <MenuItem
        component={Link}
        key={item.name}
        onClick={() => this.handleClick(item.name)}
        style={{ fontSize: '.8125rem' }}
        to={item.path}
      >
        <ListItemIcon>{ item.icon }</ListItemIcon>
        <ListItemText
          inset
          primary={item.name}
          primaryTypographyProps={{ className: classes.listSize }}
        />
      </MenuItem>
    ));

    return (
      <>
        <IconButton
          aria-haspopup='true'
          aria-owns={open ? 'menu-appbar' : null}
          className={classes.menuButton}
          color='default'
          onClick={this.handleMenu}
        >
          <img
            alt='avatar'
            height='30px'
            src='./images/city.jpg'
            style={{ borderRadius: '50%' }}
            width='30px'
          />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
          id='menu-appbar'
          onClose={this.handleClose}
          open={open}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          {menuItems}
        </Menu>
      </>
    );
  }
}

NavUserMenu.propTypes = {
  auth: PropTypes.bool.isRequired,
  classes: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const select = state => ({
  auth: state.session.auth,
});

export default withStyles(styles)(connect(select)(NavUserMenu));