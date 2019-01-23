import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';
import find from 'lodash.find';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  collapseButton: {
    marginLeft: theme.spacing.unit * 1.5,
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
  },
  collapseButtonRotate: {
    transform: 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
  },
  item: {
    color: '#333',
    paddingBottom: 12,
    paddingTop: 12,
  },
  list: {
    backgroundColor: '#f8f8f8',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  paper: {
    backgroundColor: '#fff',
    marginRight: theme.spacing.unit * 2,
  },
  selected: {
    '&:hover': {
      backgroundColor: `${theme.palette.blue} !important`,
      opacity: .9,
    },
    backgroundColor: `${theme.palette.blue} !important`,
    color: `${theme.palette.common.white} !important`,
  },
});

const menu = {
  Consulting: ['consulting', 'consult'],
  Industries: ['about', 'careers', 'insights', 'standard', 'strategy'],
  Technology: ['technology', 'tech'],
};

class NavItem extends Component {
  constructor(props) {
    super(props);
    const { item: { name } } = props;
    const path = window.location.pathname.split('/')[1];

    this.state = {
      open: path === '' ? name === 'Industries' : !!find(
        menu[name],
        i => i.indexOf(path) > -1
      ),
    };
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = () => {
    const { onClose } = this.props;
    this.setState({ open: false });
    onClose();
  };

  isOpen = (open, path) => {
    if (open) return open;
    if (path && !open) return !open;
  };

  renderListItem = (child, key) => {
    const { classes } = this.props;

    if (child.active) {
      const selected = child.path === window.location.pathname;
      const className = `${classes.nested} ${selected ? classes.selected : ''}`;

      let icon = null;
      if (child.icon) {
        icon = <ListItemIcon style={{ color: 'inherit' }}>{ child.icon }</ListItemIcon>;
      }

      return (
        <ListItem
          button
          classes={{ selected: classes.selected }}
          className={className}
          component={Link}
          key={key}
          onClick={child.onClick || this.handleClose}
          selected={selected}
          to={child.path}
        >
          {icon}
          <ListItemText
            inset
            primary={child.name}
            primaryTypographyProps={{
              style: { color: 'inherit', fontSize: '.8125rem' },
            }}
          />
        </ListItem>
      );
    }

    return null;
  };

  renderListItems = () => {
    const { item: { children } } = this.props;
    return children.map((child, key) => {
      return this.renderListItem(child, key);
    });
  };

  renderCollapseMenu = () => {
    const { open } = this.state;
    const { classes } = this.props;

    return (
      <Collapse
        in={open}
        timeout='auto'
        unmountOnExit
      >
        <List
          className={classes.list}
          component='div'
          disablePadding
        >
          {this.renderListItems()}
        </List>
      </Collapse>
    );
  };

  render() {
    const { open } = this.state;
    const { classes, item, onClose } = this.props;

    let collapseIcon = null;
    if (item.children) {
      const className = `${classes.collapseButton}
        ${open ? classes.collapseButtonRotate : ''}`;

      collapseIcon = (
        <FontAwesomeIcon
          className={className}
          icon={['fal', 'chevron-up']}
          style={{ color: '#ccc' }}
        />
      );
    }

    if (item.type === 'divider') {
      return <Divider />;
    }

    if (!item.active) {
      return null;
    }

    return (
      <>
        <ListItem
          button
          classes={{ selected: classes.selected }}
          className={
            `${classes.item}
             ${item.path === window.location.pathname ? classes.selected : ''}`
          }
          component={item.path ? Link : null}
          dense
          name={item.name}
          onClick={item.onClick || item.children ? this.handleClick : onClose}
          selected={item.path === window.location.pathname}
          to={item.path}
        >

          <ListItemIcon>{item.icon}</ListItemIcon>

          <ListItemText primary={item.name} />
          {collapseIcon}
        </ListItem>
        {item.children ? this.renderCollapseMenu() : null}
      </>
    );
  }
}


NavItem.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  item: PropTypes.shape({}).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(NavItem);