import React from 'react';

import Item from 'common/components/Item';

const Items = (props) => {
  return props.items.map((item, key) => {
    const identifier = item.title + key;
    return <Item key={identifier} {...item} />;
  });
};

export default Items;