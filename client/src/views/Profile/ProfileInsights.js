import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import moment from 'moment';

import ReportTable from 'components/ReportTable';

import {
  loadInsights,
  unloadInsights,
} from 'actions/insights';

class ProfilePosts extends Component {
  componentDidMount() {
    const { dispatch, user } = this.props;
    dispatch(loadInsights(user._id));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(unloadInsights());
  }

  render() {
    const { insights } = this.props;

    return <ReportTable
      addButton='New Insight'
      headers={[
        'Title',
        'Content',
        'Created At',
        'Last Modified',
        'Published At'
      ]}
      items={insights || []}
      onAdd='/profile/insights/new'
      properties={[
        { name: 'title', modifier: (insight) => {
            return <Link to={`/profile/insights/edit/${insight.slug}`}>
              {insight.title}
            </Link>;
          }
        },
        { name: 'brief',  modifier: null },
        { name: '_createdAt', modifier: (insight) => (
            moment(insight._createdAt).format('MMM Do YYYY, h:mm a')
          )
        },
        { name: '_modifiedAt', modifier: (insight) => (
            moment(insight._modifiedAt).format('MMM Do YYYY, h:mm a')
          )
        },
        { name: '_publishedAt', modifier: (insight) => {
            if ( !insight._publishedAt ) {
              return 'Unpublished';
            }

            return moment(insight._publishedAt).format('MMM Do YYYY, h:mm a');
          }
        },
      ]}
      title='Your Insights' />;
  }
}

const select = state => ({
  insights: state.insights.items,
  user: state.session.user,
});

export default connect(select)(ProfilePosts);