import React, { Component } from 'react';

import InsightsGrid from './InsightsGrid';
import InsightsHeader from './InsightsHeader';
import Footer from 'components/Footer';

class Insights extends Component {
  render() {
    return <>
      <InsightsHeader />
      <InsightsGrid />
      <Footer />
    </>
  }
}

export default Insights;