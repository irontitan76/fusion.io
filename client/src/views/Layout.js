import React from 'react';

import Nav from 'components/Nav';
import { menus, title } from './manifest';

export default ({ children }) => (
  <>
    {
      window.location.pathname !== '/login'
      && window.location.pathname !== '/signup'
        ? <Nav
            {...menus}
            title={title} />
          : null
    }
    { children }
  </>
);