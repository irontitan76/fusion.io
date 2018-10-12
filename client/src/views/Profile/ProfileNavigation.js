import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import filter from 'lodash.filter';

import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from '@material-ui/core/styles/withStyles';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { adminMenu, userMenu } from './profile';

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
    width: '100%'
  },
  drawerPaper: {
    backgroundColor: '#f8f8f8',
    position: 'relative',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    whiteSpace: 'nowrap',
    width: 240,
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  icon: {
    paddingLeft: theme.spacing.unit * .5,
  },
  iconContainer: {
    width: '20px !important',
  },
  item: {
    paddingBottom: 12,
    paddingTop: 12,
  },
  list: {},
  toggleButton: {
    marginLeft: theme.spacing.unit * 1.5,
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toggleButtonRotate: {
    transform: 'rotate(-180deg)',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
});

class ProfileNavigation extends Component {
  state = {
    open: false,
    type: null,
  };

  toggleOpen = type => {
    const { open } = this.state;

    if ( type === 'mouseLeave' && this.state.type === 'click' ) {
      return null;
    }

    if ( type === 'mouseEnter' && this.state.type === 'click' && open ) {
      return open ? this.setState({ open: true }) : null;
    }

    return this.setState({ open: !open, type });
  };

  render() {
    const { open } = this.state;
    const { classes, session } = this.props;

    const menuItems = session.user.role === 'admin'
      ? adminMenu
      : userMenu;

    const notifications = filter(session.user.notifications, notification => {
      if ( !notification.isNotified ) return notification;
    }).length;

    return <Drawer
      className={classes.root}
      classes={{
        paper: `
          ${classes.drawerPaper}
          ${!open ? classes.drawerPaperClose : ''}`
      }}
      open={open}
      onMouseEnter={() => this.toggleOpen('mouseEnter')}
      onMouseLeave={() => this.toggleOpen('mouseLeave')}
      variant='permanent'>

      <List className={classes.list}>
        {menuItems.map((item, index) => (
          <ListItem
            button
            className={classes.item}
            component={Link}
            dense
            key={item.label}
            to={item.path}>

            <ListItemIcon className={classes.iconContainer}>
              { item.label === 'Notifications' && notifications ?
                <Badge
                  badgeContent={notifications}
                  classes={{ badge: classes.badge }}
                  color='primary'>
                    <FontAwesomeIcon
                      className={classes.icon}
                      icon={item.icon}
                    />
                </Badge>
                : <FontAwesomeIcon
                  className={classes.icon}
                  icon={item.icon}
                />
              }
            </ListItemIcon>
            <ListItemText primary={item.label} primaryTypographyProps={{ color: 'textSecondary' }} />
          </ListItem>
        ))}
      </List>

      <List className={classes.bottomNavigation}>
        <IconButton
          className={`
            ${classes.toggleButton}
            ${!!open ? classes.toggleButtonRotate : ''}
          `}
          onClick={() => this.toggleOpen('click')}>
          <ChevronRightIcon />
        </IconButton>
      </List>

    </Drawer>;
  }
}

export default withStyles(styles)(ProfileNavigation);