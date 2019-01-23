import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import moment from 'moment';

import ReportTable from 'components/ReportTable';

import {
  loadCareers,
  unloadCareers,
} from 'actions/careers';

class ProfilePosts extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadCareers());
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(unloadCareers());
  }

  render() {
    const { careers } = this.props;

    return (
      <ReportTable
        addButton='New Career'
        headers={[
          'Role',
          'Brief Description',
          'Location',
          'Organization',
          'Team',
          'Posted At',
        ]}
        items={careers || []}
        onAdd='/profile/careers/new'
        properties={[
          {
            modifier: (career) => {
              return (
                <Link to={`/profile/careers/edit/${career._id}`}>
                  {career.role}
                </Link>
              );
            },
            name: 'role',
          },
          { modifier: null, name: 'brief' },
          { modifier: career => career.location, name: 'location' },
          { modifier: null, name: 'org' },
          { modifier: null, name: 'team' },
          {
            modifier: (career) => {
              if (!career._publishedAt) {
                return 'Unposted';
              }

              return moment(career._publishedAt).format('MMM Do YYYY, h:mm a');
            },
            name: '_publishedAt',
          },
        ]}
        title='Careers'
      />
    );
  }
}

ProfilePosts.propTypes = {
  careers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const select = state => ({
  careers: state.careers.items,
});

export default connect(select)(ProfilePosts);