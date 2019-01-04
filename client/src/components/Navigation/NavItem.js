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
    backgroundColor: `${theme.palette.blue} !important`,
    color: `${theme.palette.common.white} !important`,
    '&:hover': {
      backgroundColor: `${theme.palette.blue} !important`,
      opacity: .9,
    }
  },
  collapseButton: {
    marginLeft: theme.spacing.unit * 1.5,
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  collapseButtonRotate: {
    transform: 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
});

const menu = {
  'Industries': [ 'about', 'careers', 'insights', 'standard', 'strategy' ],
  'Consulting': [ 'consulting', 'consult' ],
  'Technology': [ 'technology', 'tech' ],
};

export class NavItem extends Component {
  constructor(props) {
    super(props);

    const path = window.location.pathname.split('/')[1];

    this.state = {
      open: path === '' ? props.item.name === 'Industries' : !!find(
        menu[props.item.name],
        i => i.indexOf(path) > -1
      ),
    }
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = () => {
    const { onClose } = this.props;
    this.setState(state => ({ open: false }));
    onClose();
  };

  isOpen = (open, path) => {
    if ( open ) return open;
    if ( path && !open ) return !open;
  };

  renderListItem = (child, key) => {
    const { classes } = this.props;

    if ( !!child.active ) {
      const selected = child.path === window.location.pathname;
      const className = `${classes.nested} ${selected ? classes.selected : ''}`;

      let icon = null;
      if ( child.icon ) {
        icon = <ListItemIcon
          style={{ color: 'inherit' }}>
          { child.icon }
        </ListItemIcon>;
      }

      return <ListItem
        button
        classes={{ selected: classes.selected, }}
        className={className}
        component={Link}
        key={key}
        onClick={child.onClick || this.handleClose}
        selected={selected}
        to={child.path}>
        {icon}
        <ListItemText
          inset
          primary={child.name}
          primaryTypographyProps={{
            style: { color: 'inherit', fontSize: '.8125rem' }
          }} />
      </ListItem>;
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

    return <Collapse
      in={open}
      timeout='auto'
      unmountOnExit>
      <List
        className={classes.list}
        component='div'
        disablePadding>
        {this.renderListItems()}
      </List>
    </Collapse>;
  };

  render() {
    const { open } = this.state;
    const { classes, item, onClose } = this.props;

    let collapseIcon = null;
    if ( item.children ) {
      const className = `${classes.collapseButton}
        ${!!open ? classes.collapseButtonRotate : ''}`;

      collapseIcon = <FontAwesomeIcon
        className={className}
        icon={[ 'fal', 'chevron-up' ]}
        style={{ color: '#ccc' }} />
    }

    if ( item.type === 'divider' ) {
      return <Divider />;
    } else if ( !item.active ) {
      return null;
    } else {
      return <>
        <ListItem
          button
          classes={{ selected: classes.selected }}
          className={
            `${classes.item}
             ${item.path === window.location.pathname
               ? classes.selected
               : ''}`
          }
          component={item.path ? Link : null}
          dense
          name={item.name}
          onClick={item.onClick || item.children ? this.handleClick : onClose}
          selected={item.path === window.location.pathname}
          to={item.path}>

          <ListItemIcon>{ item.icon }</ListItemIcon>

          <ListItemText primary={ item.name } />
          { collapseIcon }
        </ListItem>
        { item.children ? this.renderCollapseMenu() : null }
      </>;
    }
  }
}

NavItem.defaultProps = {
  classes: {},
  item: {}
};

NavItem.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
};

export default withStyles(styles)(NavItem);