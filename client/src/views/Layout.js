import React from 'react';

import Nav from 'components/Nav';
import { menus, title } from './manifest';

export default ({ children }) => (
  <>
    <Nav
      {...menus}
      title={title} />
    { children }
  </>
);