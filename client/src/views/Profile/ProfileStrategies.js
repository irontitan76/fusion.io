import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import moment from 'moment';

import ReportTable from 'components/ReportTable';

import {
  loadStrategies,
  unloadStrategies,
} from 'actions/strategies';

class ProfileStrategies extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(loadStrategies());
  };

  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch(unloadStrategies());
  };

  getTitleLevel = (item) => {
    const isValidLevel = item.level !== 0 && item.level !== 1;
    return isValidLevel ? [new Array(item.level).join('\u2014'), '\u00a0\u00a0'] : null;
  };

  render() {
    const { strategies } = this.props;

    return <ReportTable
      addButton='New Strategy'
      headers={[
        'Title',
        'Order',
        'Level',
        'Date Created',
        'Date Modified',
        'Date Published'
      ]}
      items={strategies || []}
      onAdd='/profile/strategies/new'
      properties={[
        { name: 'title', modifier: (strategy) => {
            return <>
              {this.getTitleLevel(strategy)}
              <Link to={`/profile/strategies/edit/${strategy._id}`}>
                {strategy.title}
              </Link>
            </>;
          }
        },
        { name: 'order',  modifier: null },
        { name: 'level',  modifier: null },
        { name: '_createdAt', modifier: (strategy) => (
            moment(strategy._createdAt).format('MMM Do YYYY, h:mm a')
          )
        },
        { name: '_modifiedAt', modifier: (strategy) => (
            moment(strategy._modifiedAt).format('MMM Do YYYY, h:mm a')
          )
        },
        { name: '_publishedAt', modifier: (strategy) => {
            if ( !strategy._publishedAt ) {
              return 'Unpublished';
            }

            return moment(strategy._publishedAt).format('MMM Do YYYY, h:mm a');
          }
        },
      ]}
      title='The Fusion Strategy' />;
  }
}

const select = state => ({
  strategies: state.strategies.items,
});

export default connect(select)(ProfileStrategies);