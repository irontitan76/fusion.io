import React, { Component } from 'react';
import { connect } from 'react-redux';

import InsightsGrid from './InsightsGrid';
import InsightsHeader from './InsightsHeader';
import Footer from 'components/Footer';

import { loadInsights } from 'actions/insights';

class Insights extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadInsights());
  }

  render() {
    const { insights } = this.props;

    return <>
      <InsightsHeader />
      <InsightsGrid insights={insights} />
      <Footer />
    </>
  }
}

const select = state => ({
  insights: state.insights.items
})


export default connect(select)(Insights);