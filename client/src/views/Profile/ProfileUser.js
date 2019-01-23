import React  from 'react';
import PropTypes from 'prop-types';

import ProfileNavigation from './ProfileNavigation';

const ProfileUser = (props) => {
  const { session } = props;
  return <ProfileNavigation session={session} />;
};

ProfileUser.propTypes = {
  session: PropTypes.shape({}).isRequired,
};

export default ProfileUser;