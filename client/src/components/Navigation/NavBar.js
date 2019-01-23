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
    '&:hover': {
      color: theme.palette.blue,
    },
    color: '#111',
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    '&:hover': {
      color: theme.palette.blue,
    },
    color: '#111',
    flexGrow: 1,
    fontWeight: 300,
    letterSpacing: 8,
    textDecoration: 'none',
  },
  toolbar: theme.mixins.toolbar,
});

class NavBar extends Component {
  renderLogo = () => {
    const { classes, onClick, title } = this.props;

    return (
      <>
        <IconButton
          aria-label='Menu'
          className={classes.menuButton}
          color='inherit'
          onClick={onClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          className={classes.title}
          component={Link}
          color='inherit'
          to='/'
          variant='h6'
        >
          {title}
        </Typography>
      </>
    );
  };

  render() {
    const { classes, items } = this.props;

    return (
      <>
        <AppBar className={classes.appBar} elevation={8} position='fixed'>
          <Toolbar className={classes.toolbar}>
            {this.renderLogo()}
            <NavUserMenu items={items} />
          </Toolbar>
        </AppBar>
        <div className={classes.toolbar} />
      </>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.node.isRequired,
};

export default withStyles(styles)(NavBar);