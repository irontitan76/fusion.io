import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import moment from 'moment';

import ReportTable from 'components/ReportTable';

import {
  loadPolicies,
  unloadPolicies,
} from 'actions/policies';

class ProfilePosts extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadPolicies());
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(unloadPolicies());
  }

  render() {
    const { policies } = this.props;

    return (
      <ReportTable
        addButton='New Policy'
        headers={[
          'Title',
          'Content',
          'Created At',
          'Last Modified',
          'Published At',
        ]}
        items={policies || []}
        onAdd='/profile/policies/new'
        properties={[
          {
            modifier: (policy) => {
              return (
                <Link to={`/profile/policies/edit/${policy._id}`}>
                  {policy.title}
                </Link>
              );
            },
            name: 'title',
          },
          { modifier: null, name: 'brief' },
          {
            modifier: (policy) => moment(policy._createdAt).format('MMM Do YYYY, h:mm a'),
            name: '_createdAt',
          },
          {
            modifier: (policy) => moment(policy._modifiedAt).format('MMM Do YYYY, h:mm a'),
            name: '_modifiedAt',
          },
          {
            modifier: (policy) => {
              if (!policy._publishedAt) return 'Unpublished';
              return moment(policy._publishedAt).format('MMM Do YYYY, h:mm a');
            },
            name: '_publishedAt',
          },
        ]}
        title='Your Policies'
      />
    );
  }
}

ProfilePosts.propTypes = {
  dispatch: PropTypes.func.isRequired,
  policies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const select = state => ({
  policies: state.policies.items,
});

export default connect(select)(ProfilePosts);