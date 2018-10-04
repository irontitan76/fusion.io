import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import InsightArticle from './InsightArticle';
import InsightsHeader from './../Insights/InsightsHeader'; // From another folder :(
import Footer from 'components/Footer';

class Insight extends Component {
  render() {
    return <>
      <InsightsHeader />
      <Grid container justify='space-between' style={{ paddingLeft: 30, paddingRight: 30 }}>
        <InsightArticle />
      </Grid>
      <Footer />
    </>
  }
}

export default Insight;