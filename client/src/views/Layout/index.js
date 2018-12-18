import React from 'react';

import Navigation from 'components/Navigation';
import { menus, title } from './layout';

export default ({ children }) => (
  <>
    {
      window.location.pathname !== '/login'
      && window.location.pathname !== '/signup'
        ? <Navigation
            {...menus}
            title={title} />
          : null
    }
    { children }
  </>
);