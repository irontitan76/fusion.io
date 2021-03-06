import React, { Component } from 'react';

import ProfileNavigation from './ProfileNavigation';

class ProfileUser extends Component {
  render() {
    const { session } = this.props;

    return <ProfileNavigation session={session} />;
  }
}

export default ProfileUser;