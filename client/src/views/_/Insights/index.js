import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import filter from 'lodash.filter';

import Footer from 'components/Footer';
import {
  loadInsights,
  unloadInsights,
} from 'actions/insights';
import InsightsGrid from './InsightsGrid';
import InsightsHeader from './InsightsHeader';


class Insights extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadInsights());
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(unloadInsights());
  }

  filterInsights = () => {
    const { insights, location: { search } } = this.props;
    const filters = queryString.parse(search);

    return filter(insights, filters);
  };

  render() {
    const { dispatch, history } = this.props;

    return (
      <>
        <main style={{ minHeight: '100%' }}>
          <InsightsHeader dispatch={dispatch} history={history} />
          <InsightsGrid insights={this.filterInsights()} />
        </main>
        <Footer />
      </>
    );
  }
}

Insights.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  insights: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  location: PropTypes.shape({}).isRequired,
};

const select = state => ({
  insights: state.insights.filteredItems,
});

export default connect(select)(Insights);