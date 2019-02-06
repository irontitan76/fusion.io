import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import NavLink from 'react-router-dom/NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Collapse from '@material-ui/core/Collapse';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import LockIcon from '@material-ui/icons/Lock';
import MenuIcon from '@material-ui/icons/Menu';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => {
  const { mixins, palette, spacing } = theme;

  const buttonTransition = theme.transitions.create('transform', {
    duration: theme.transitions.duration.leavingScreen,
    easing: theme.transitions.easing.sharp,
  });

  const drawerTransition = theme.transitions.create('width', {
    duration: theme.transitions.duration.enteringScreen,
    easing: theme.transitions.easing.sharp,
  });

  return {
    collapse: {
      backgroundColor: palette.primary.dark,
    },
    collapseButton: {
      color: 'inherit',
      marginLeft: spacing.unit * 1.5,
      transition: buttonTransition,
    },
    collapseButtonRotate: {
      transform: 'rotate(90deg)',
      transition: buttonTransition,
    },
    collapseMenu: {
      backgroundColor: palette.primary.dark,
    },
    divider: {
      color: palette.divider,
    },
    drawer: {
      backgroundColor: theme.palette.background.default,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      width: 260,
    },
    drawerClose: {
      overflowX: 'hidden',
      transition: drawerTransition,
      width: spacing.unit * 6,
      [theme.breakpoints.up('sm')]: {
        width: spacing.unit * 8,
      },
    },
    drawerOpen: {
      transition: drawerTransition,
      width: 260,
    },
    icon: {
      margin: '0 auto',
      width: 24,
    },
    listButton: {
      color: palette.common.white,
    },
    listItem: {
      '&:hover': {
        backgroundColor: palette.primary.light,
        color: palette.primary.dark,
      },
      backgroundColor: 'transparent',
      color: palette.common.white,
      transition: '.5s',
    },
    listItemActive: {
      backgroundColor: palette.primary.light,
      color: palette.common.white,
    },
    listItemGutters: {
      paddingLeft: spacing.unit * 2.5,
      paddingRight: spacing.unit * 2.5,
      [theme.breakpoints.down('md')]: {
        paddingLeft: spacing.unit * 1.65,
        paddingRight: spacing.unit * 1.65,
      },
    },
    listItemIcon: {
      color: 'inherit',
      width: 24,
    },
    listItemSubheader: {
      color: palette.common.white,
      fontSize: 24,
      height: 48,
      paddingBottom: theme.spacing.unit * 7,
      paddingLeft: theme.spacing.unit * 3,
    },
    listItemText: {
      color: 'inherit',
      paddingLeft: 8,
      paddingRight: 0,
    },
    lockIcon: {
      marginLeft: spacing.unit * 2.5,
      marginRight: spacing.unit * 2.5,
      opacity: .25,
    },
    paper: {
      backgroundColor: palette.primary.main,
      borderLeft: 'none',
      borderRight: 'none',
    },
    text: {
      color: 'inherit',
      fontWeight: 300,
    },
    toggleButton: {
      color: palette.common.white,
      marginLeft: spacing.unit,
      transition: buttonTransition,
      [theme.breakpoints.down('md')]: {
        marginLeft: 0,
      },
    },
    toggleButtonRotate: {
      transform: 'rotate(-180deg)',
      transition: buttonTransition,
    },
    toggleContainer: {
      bottom: 0,
      position: 'absolute',
      width: '100%',
    },
    toolbar: mixins.toolbar,
  };
};

class NavigationDrawer extends Component {
  state = { isListOpen: false, lock: false, menuOpen: [], open: false };

  componentDidMount = () => {
    return null;
  };

  onClose = () => {
    this.setState({ open: false });
  };

  onToggle = () => {
    this.setState((state) => ({ isListOpen: !state.isListOpen }));
  };

  onLock = () => {
    const { lock, open } = this.state;
    this.setState({ lock: lock && !open ? lock : !lock, open: !open  });
  };

  onOpen = () => {
    this.setState({ open: true });
  };

  onMenuToggle = (label) => {
    const { menuOpen } = this.state;

    const menusOpen = [...menuOpen];
    const menuIndex = menuOpen.indexOf(label);

    if (menuIndex > -1) {
      menusOpen.splice(menuIndex, 1);
    } else {
      menusOpen.push(label);
    }

    this.setState({ menuOpen: menusOpen });
  };

  renderExpandControl = () => {
    const { lock, open } = this.state;
    const { anchor, classes } = this.props;

    if (anchor === 'bottom' || anchor === 'top') {
      return null;
    }

    const toggleButton = anchor === 'left' ? <ChevronRightIcon /> : <ChevronLeftIcon />;
    const toggleButtonClass = `${classes.toggleButton} ${open ? classes.toggleButtonRotate : ''}`;

    return (
      <List className={classes.toggleContainer}>
        { lock ? <div><LockIcon className={classes.lockIcon} /></div> : null }
        <IconButton className={toggleButtonClass} onClick={this.onLock}>
          {toggleButton}
        </IconButton>
      </List>
    );
  };

  renderCollapseIcon = (item, isMenuOpen) => {
    if (!item.children) return null;

    const { classes } = this.props;
    const className = `${classes.collapseButton} ${isMenuOpen ? classes.collapseButtonRotate : ''}`;
    return <ChevronRightIcon className={className} />;
  };

  renderCollapseMenu = (children, isMenuOpen) => {
    if (!children) return null;

    const { classes } = this.props;

    return (
      <Collapse className={classes.collapse} in={isMenuOpen} timeout='auto' unmountOnExit>
        <List
          className={classes.collapseMenu}
          component='div'
          disablePadding
        >
          {this.renderListItems(children)}
        </List>
      </Collapse>
    );
  };

  renderListItem = (item) => {
    const { menuOpen } = this.state;
    const { classes, dense } = this.props;
    const isMenuOpen = menuOpen.indexOf(item.label) > -1 ;

    const active = item.path ? { activeClassName: classes.listItemActive } : null;

    return (
      <Fragment key={item.label}>
        <ListItem
          {...active}
          button
          classes={{ gutters: classes.listItemGutters }}
          className={classes.listItem}
          component={item.path ? NavLink : null}
          dense={dense}
          onClick={item.children ? () => this.onMenuToggle(item.label) : null}
          to={item.path}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <FontAwesomeIcon className={classes.icon} icon={item.icon} />
          </ListItemIcon>
          <ListItemText
            className={classes.listItemText}
            primary={item.label}
            primaryTypographyProps={{ className: classes.text }}
          />
          {this.renderCollapseIcon(item, isMenuOpen)}
        </ListItem>
        {this.renderCollapseMenu(item.children, isMenuOpen)}
      </Fragment>
    );
  }

  renderListItems = (items) => {
    const { isListOpen } = this.state;
    const { anchor } = this.props;

    const isVertical = anchor === 'top' || anchor === 'bottom';
    if (isVertical && !isListOpen) return null;

    const content = items.map((item) => this.renderListItem(item));

    if (isVertical) {
      return (
        <Collapse in={isListOpen}>
          {content}
        </Collapse>
      );
    }

    return content;
  };

  renderListSubheader = (isHorizontal) => {
    const { open } = this.state;
    const { anchor, classes, collapsedTitle, expandedTitle } = this.props;

    if (!collapsedTitle && !expandedTitle) return null;

    const isVertical = anchor === 'top' || anchor === 'bottom';

    const button = (
      <Grid item style={{ marginBottom: 30 }}>
        <IconButton className={classes.listButton} onClick={this.onToggle}>
          <MenuIcon />
        </IconButton>
      </Grid>
    );

    return (
      <>
        <ListSubheader className={classes.listItemSubheader}>
          <Grid container justify='space-between'>
            <Grid item style={{ flexGrow: 1 }}>
              {isHorizontal && !open ? collapsedTitle : expandedTitle}
            </Grid>
            {isVertical ? button : null}
          </Grid>
        </ListSubheader>
        <Divider className={classes.divider} />
      </>
    );
  };

  render() {
    const { lock, open } = this.state;
    const { anchor, classes, items, underToolbar } = this.props;

    const isHorizontal = anchor === 'left' || anchor === 'right';
    const isOpenClass = open ? classes.drawerOpen : classes.drawerClose;
    const drawerClass =  `${classes.drawer} ${isHorizontal ? isOpenClass : ''}`;
    const paperClass = `${classes.paper} ${isHorizontal ? isOpenClass : ''}`;
    const spacer = underToolbar ? <div className={classes.toolbar} /> : null;

    return (
      <Fade in timeout={500}>
        <Drawer
          anchor={anchor}
          classes={{ paper: paperClass }}
          className={drawerClass}
          onMouseOut={lock ? null : this.onClose}
          onMouseOver={lock ? null : this.onOpen}
          variant='permanent'
        >
          {spacer}
          <List>
            {this.renderListSubheader(isHorizontal)}
            {this.renderListItems(items)}
          </List>
          {this.renderExpandControl()}
        </Drawer>
      </Fade>
    );
  }
}

NavigationDrawer.defaultProps = {
  anchor: 'left',
  collapsedTitle: null,
  dense: false,
  expandedTitle: null,
  underToolbar: false,
};

const itemShape = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  path: PropTypes.string,
};

NavigationDrawer.propTypes = {
  anchor: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  collapsedTitle: PropTypes.node,
  dense: PropTypes.bool,
  expandedTitle: PropTypes.node,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.arrayOf(PropTypes.shape(itemShape)),
      ...itemShape,
    })
  ).isRequired,
  underToolbar: PropTypes.bool,
};

export default withStyles(styles)(NavigationDrawer);