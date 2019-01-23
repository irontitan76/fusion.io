import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import withStyles from '@material-ui/core/styles/withStyles';

import NavItem from './NavItem';

const styles = {};

class NavItems extends Component {
  getItems = () => {
    const { items, onClose } = this.props;

    return items.map((item) => (
      <NavItem item={item} key={item.name} onClose={onClose} />
    ));
  }

  render() {
    return (
      <List component='nav'>
        {this.getItems()}
      </List>
    );
  }
}

NavItems.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(NavItems);