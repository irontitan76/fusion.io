import React from 'react';
import PropTypes from 'prop-types';

import ProfileNavigation from './ProfileNavigation';

const ProfileAdmin = (props) => {
  const { session } = props;
  return <ProfileNavigation session={session} />;
};

ProfileAdmin.propTypes = {
  session: PropTypes.shape({}).isRequired,
};

export default ProfileAdmin;