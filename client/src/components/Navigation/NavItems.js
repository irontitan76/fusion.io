import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import withStyles from '@material-ui/core/styles/withStyles';

import NavItem from './NavItem';

const styles = {};

export class NavItems extends Component {
  getItems = () => {
    const { items } = this.props;
    
    return items.map((item, key) => (
      <NavItem 
        item={item} 
        key={key} 
        onClose={this.props.onClose} />
    ));
  }

  render() {
    return <List component='nav'>
      {this.getItems()}
    </List>;
  }
}

NavItems.defaultProps = {
  classes: {},
  children: []
};

NavItems.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired
};

export default withStyles(styles)(NavItems);