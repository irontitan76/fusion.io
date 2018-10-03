import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  item: {
    paddingBottom: 12,
    paddingTop: 12
  },
  list: {

  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  paper: {
    backgroundColor: '#fff',
    marginRight: theme.spacing.unit * 2,
  }
});

export class NavItem extends Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleClose = () => {
    const { onClose } = this.props;

    this.setState(state => ({
      open: false
    }));

    onClose();
  }

  renderCollapseMenu = () => {
    const { open } = this.state;
    const { classes, item } = this.props;

    return (
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List className={classes.list} component="div" disablePadding>
          {
            item.children.map((child, key) => !!child.active ?
              <ListItem
                button
                className={classes.nested}
                component={Link}
                key={key}
                onClick={child.onClick || this.handleClose}

                to={child.path}>
                {
                  child.icon
                    ? <ListItemIcon>{ child.icon }</ListItemIcon>
                    : null
                }
                <ListItemText
                  inset
                  primary={child.name}
                  primaryTypographyProps={{
                    style: { fontSize: '.8125rem' }
                  }}
                />
              </ListItem> : null
            )
          }
        </List>
      </Collapse>
    );
  };

  render() {
    const { open } = this.state;
    const { classes, item, onClose } = this.props;

    if ( item.type === 'divider' ) {
      return <Divider />;
    } else {
      return !!item.active ? <>
        <ListItem
          button
          className={classes.item}
          component={item.path ? Link : null}
          dense
          name={item.name}
          onClick={item.onClick || item.children ? this.handleClick : onClose}
          to={item.path}>
          { item.icon ? <ListItemIcon>{ item.icon }</ListItemIcon> : null }
          <ListItemText primary={ item.name } primaryTypographyProps={{ style: { fontWeight: !!item.children ? 700 : 400 } }} />
          {
            !!item.children
              ? open
                ? <FontAwesomeIcon
                  icon={[ 'far', 'chevron-down' ]}
                  style={{ color: '#ccc' }} />
                : <FontAwesomeIcon
                  icon={[ 'far', 'chevron-up' ]}
                  style={{ color: '#ccc' }} />
              : null
          }
        </ListItem>
        { item.children && this.renderCollapseMenu() }
      </> : null;
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