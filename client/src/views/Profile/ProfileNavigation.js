import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import filter from 'lodash.filter';

import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from '@material-ui/core/styles/withStyles';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { adminMenu, settingsMenu, userMenu } from './profile';

const styles = theme => ({
  badge: {
    border: `2px solid ${theme.palette.offwhite}`,
    height: 15,
    right: -10,
    top: -5,
    width: 15,
  },
  bottomNavigation: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  drawerPaper: {
    backgroundColor: theme.palette.primary.main,
    height: '100%',
    position: 'relative',
    top: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.sharp,
    }),
    whiteSpace: 'nowrap',
    width: 240,
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  icon: {
    color: '#fff',
  },
  iconContainer: {
    display: 'block',
    textAlign: 'center',
    width: 20,
  },
  item: {
    paddingBottom: 12,
    paddingTop: 12,
  },
  list: {},
  toggleButton: {
    color: '#fff',
    marginLeft: theme.spacing.unit * 1.5,
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
  },
  toggleButtonRotate: {
    transform: 'rotate(-180deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
  },
  toolbar: theme.mixins.toolbar,
});

class ProfileNavigation extends Component {
  state = {
    open: false,
    type: null,
  };

  toggleOpen = eventType => {
    const { open, type } = this.state;

    if (eventType === 'mouseLeave' && type === 'click') {
      return null;
    }

    if (eventType === 'mouseEnter' && type === 'click' && open) {
      return open ? this.setState({ open: true }) : null;
    }

    return this.setState({ open: !open, type: eventType });
  };

  getMenuItems = () => {
    const { session } = this.props;
    const isAdmin = session.user.role === 'admin';

    let menuItems = [];
    if (isAdmin) {
      menuItems = adminMenu;
    } else {
      menuItems = userMenu;
    }

    return [...menuItems, ...settingsMenu];
  };

  getNotifications = () => {
    const { session } = this.props;

    return filter(session.user.notifications, notification => {
      if (!notification.isNotified) {
        return notification;
      }
    }).length;
  };

  renderMenuItems = () => {
    const { classes } = this.props;

    const menuItems = this.getMenuItems();

    return menuItems.map(menuItem => (
      <ListItem
        button
        className={classes.item}
        component={Link}
        dense
        key={menuItem.label}
        to={menuItem.path}
      >

        <ListItemIcon className={classes.iconContainer}>
          {this.renderNotifications(menuItem)}
        </ListItemIcon>
        <ListItemText
          primary={menuItem.label}
          primaryTypographyProps={{ style: { color: '#fff' } }}
        />
      </ListItem>
    ));
  };

  renderNotifications = (menuItem) => {
    const { classes } = this.props;

    return <FontAwesomeIcon className={classes.icon} icon={menuItem.icon} />;
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;

    const paperClass = `
      ${classes.drawerPaper}
      ${!open ? classes.drawerPaperClose : ''}`;

    const buttonClass = `
      ${classes.toggleButton}
      ${open ? classes.toggleButtonRotate : ''}`;

    return (
      <Drawer
        classes={{ paper: paperClass }}
        className={classes.root}
        onMouseEnter={() => this.toggleOpen('mouseEnter')}
        onMouseLeave={() => this.toggleOpen('mouseLeave')}
        open={open}
        variant='permanent'
      >

        <List className={classes.list}>
          {this.renderMenuItems()}
        </List>

        <List className={classes.bottomNavigation}>
          <IconButton
            className={buttonClass}
            onClick={() => this.toggleOpen('click')}
          >
            <ChevronRightIcon />
          </IconButton>
        </List>

      </Drawer>
    );
  }
}

ProfileNavigation.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  session: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(ProfileNavigation);