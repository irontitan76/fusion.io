import React from 'react';
// import PropTypes from 'prop-types';

// import ProfileNavigation from './ProfileNavigation';
import NavigationDrawer from '../../components/v2/NavigationDrawer';
import { adminMenu } from './profile';

const ProfileAdmin = () => {
  // const { session } = props;
  return <NavigationDrawer items={adminMenu} underToolbar />;
};

ProfileAdmin.propTypes = {
  // session: PropTypes.shape({}).isRequired,
};

export default ProfileAdmin;