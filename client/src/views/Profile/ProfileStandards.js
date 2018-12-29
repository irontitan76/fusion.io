import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import moment from 'moment';

import ReportTable from 'components/ReportTable';

import {
  loadStandards,
  unloadStandards,
} from 'actions/standards';

class ProfileStandards extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(loadStandards());
  };

  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch(unloadStandards());
  };

  getTitleLevel = (item) => {
    const isValidLevel = item.level !== 0 && item.level !== 1;
    return isValidLevel ? [new Array(item.level).join('\u2014'), '\u00a0\u00a0'] : null;
  };

  render() {
    const { standards } = this.props;

    return <ReportTable
      addButton='New Standard'
      headers={[
        'Title',
        'Order',
        'Level',
        'Date Created',
        'Date Modified',
        'Date Published'
      ]}
      items={standards || []}
      onAdd='/profile/standards/new'
      properties={[
        { name: 'title', modifier: (standard) => {
            return <>
              {this.getTitleLevel(standard)}
              <Link to={`/profile/standards/edit/${standard._id}`}>
                {standard.title}
              </Link>
            </>;
          }
        },
        { name: 'order',  modifier: null },
        { name: 'level',  modifier: null },
        { name: '_createdAt', modifier: (standard) => (
            moment(standard._createdAt).format('MMM Do YYYY, h:mm a')
          )
        },
        { name: '_modifiedAt', modifier: (standard) => (
            moment(standard._modifiedAt).format('MMM Do YYYY, h:mm a')
          )
        },
        { name: '_publishedAt', modifier: (standard) => {
            if ( !standard._publishedAt ) {
              return 'Unpublished';
            }

            return moment(standard._publishedAt).format('MMM Do YYYY, h:mm a');
          }
        },
      ]}
      title='The Fusion Standard' />;
  }
}

const select = state => ({
  standards: state.standards.items,
});

export default connect(select)(ProfileStandards);