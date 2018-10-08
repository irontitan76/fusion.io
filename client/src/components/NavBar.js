import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import NavUserMenu from 'components/NavUserMenu';

const styles = theme => ({
  appBar: {
    backgroundColor: '#111',
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    flexGrow: 1,
    fontWeight: 300,
    letterSpacing: 8,
    textDecoration: 'none'
  },
  toolbar: {}
});

export class NavBar extends Component {
  render() {
    const { classes, items, onClick, title } = this.props;

    return (
      <AppBar className={classes.appBar} position='sticky'>
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
            variant='title'>
            { title }
          </Typography>
          <NavUserMenu items={items} />
        </Toolbar>
      </AppBar>
    );
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