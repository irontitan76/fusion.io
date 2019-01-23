import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import ReportTable from 'components/ReportTable';

const ProfilePosts = (props) => {
  const { notifications } = props;

  return (
    <ReportTable
      addButton='New Insight'
      headers={['Name', 'Description', 'Notified At']}
      items={notifications || []}
      onAdd='/profile/notifications/new'
      properties={[
        { modifier: null, name: 'name' },
        { modifier: null, name: 'description' },
        {
          modifier: (notification) => moment(notification._notifiedAt)
            .format('MMM Do YYYY, h:mm a'),
          name: '_modifiedAt',
        },
      ]}
      title='Your Notifications'
    />
  );
};

ProfilePosts.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const select = state => ({
  notifications: state.session.user.notifications,
});

export default connect(select)(ProfilePosts);