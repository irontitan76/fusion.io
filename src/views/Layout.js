import React from 'react';

import Nav from 'components/Nav';
import { layoutManifest } from 'common/manifests';

export default ({ children }) => (
  <>
    <Nav
      {...layoutManifest.menus}
      title='FUSION' />
    { children }
  </>
);