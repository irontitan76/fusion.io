import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

import BoxItem from 'components/BoxItem';

const styles = () => ({});

export class BoxItems extends Component {
  render() {
    const { items } = this.props;

    return items.map((item, key) => (
      <BoxItem item={item} key={key} />
    ));
  }
}

BoxItems.defaultProps = {};
BoxItems.propTypes = {};

export default withStyles(styles)(BoxItems);