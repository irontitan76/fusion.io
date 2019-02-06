import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';

import AppBar from '@material-ui/core/AppBar';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    flexGrow: 1,
    paddingBottom: theme.spacing.unit * .5,
    paddingTop: theme.spacing.unit * 1.5,
  },
  menuButton: {
    marginLeft: -theme.spacing.unit * 1.5,
    marginRight: theme.spacing.unit * 2.5,
  },
  textLogo: {
    fontWeight: 300,
    letterSpacing: 5,
    paddingBottom: 0,
    paddingTop: 0,
    textDecoration: 'none',
  },
});

/**
 * @class @name NavigationBar
 */
// eslint-disable-next-line
class NavigationBar extends Component {
  /**
   * @method render
   * @description Renders the NavBar with the menu icon and title of site
   */
  render() {
    const { classes, logo, onClick, variant } = this.props;

    const menuButton = onClick ? (
      <IconButton
        aria-label='Menu'
        className={classes.menuButton}
        color='inherit'
        onClick={onClick}
      >
        <MenuIcon />
      </IconButton>
    ) : null;

    return (
      <Fade in timeout={500}>
        <AppBar className={classes.appBar} position='sticky'>
          <Toolbar variant={variant}>
            {menuButton}
            <Typography
              className={`${classes.logo} ${typeof logo === 'string' ? classes.textLogo : ''}`}
              color='inherit'
              component={Link}
              to='/'
              variant='h6'
            >
              {logo}
            </Typography>
          </Toolbar>
        </AppBar>
      </Fade>
    );
  }
}

NavigationBar.defaultProps = {
  logo: 'FUSION',
  onClick: () => null,
  variant: 'regular',
};

NavigationBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  logo: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.string,
};

export default withStyles(styles)(NavigationBar);