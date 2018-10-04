import React, { Component } from 'react';

import TabBar from 'components/TabBar';
import { services } from './home';

class HomeServices extends Component {
  render() {
    const { items, title } = services;

    return <TabBar
      direction='horizontal'
      name={title}
      values={items}
    />;
  };
}

export default HomeServices;