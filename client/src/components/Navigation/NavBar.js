import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import NavUserMenu from './NavUserMenu';

const styles = theme => ({
  appBar: {
    backgroundColor: '#fefefe',
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    color: '#111',
    marginLeft: -12,
    marginRight: 20,
    '&:hover': {
      color: theme.palette.blue,
    }
  },
  title: {
    color: '#111',
    flexGrow: 1,
    fontWeight: 300,
    letterSpacing: 8,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.blue,
    }
  },
  toolbar: {}
});

export class NavBar extends Component {
  render() {
    const { classes, items, onClick, title } = this.props;

    return <AppBar className={classes.appBar} position='sticky'>
      <Toolbar className={classes.toolbar}>
        <IconButton
          aria-label='Menu'
          className={classes.menuButton}
          color='inherit'
          onClick={onClick}>
          <MenuIcon />
        </IconButton>
        <Typography
          className={classes.title}
          component={Link}
          color='inherit'
          to='/'
          variant='h6'>
          { title }
        </Typography>
        <NavUserMenu items={items} />
      </Toolbar>
    </AppBar>;
  }
}

NavBar.defaultProps = {
  classes: {},
  onClick: null,
  title: ''
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.node.isRequired
};

export default withStyles(styles)(NavBar);