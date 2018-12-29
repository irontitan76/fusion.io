import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import ReportTable from 'components/ReportTable';

class ProfilePosts extends Component {
  render() {
    const { notifications } = this.props;

    return <ReportTable
      addButton='New Insight'
      headers={[
        'Name',
        'Description',
        'Notified At',
      ]}
      items={notifications || []}
      onAdd='/profile/notifications/new'
      properties={[
        { name: 'name', modifier: null },
        { name: 'description',  modifier: null },
        { name: '_modifiedAt', modifier: (notification) => (
            moment(notification._notifiedAt).format('MMM Do YYYY, h:mm a')
          )
        },
      ]}
      title='Your Notifications' />;
  }
}

const select = state => ({
  notifications: state.session.user.notifications,
});

export default connect(select)(ProfilePosts);