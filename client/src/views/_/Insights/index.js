import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import filter from 'lodash.filter';

import InsightsGrid from './InsightsGrid';
import InsightsHeader from './InsightsHeader';
import Footer from 'components/Footer';

import { loadInsights, unloadInsights } from 'actions/insights';

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
    const { history } = this.props;
    
    return <>
      <main style={{ minHeight: '100%', }}>
        <InsightsHeader history={history} />
        <InsightsGrid insights={this.filterInsights()} />
      </main>
      <Footer />
    </>;
  }
}

const select = state => ({
  insights: state.insights.filteredItems
});


export default connect(select)(Insights);