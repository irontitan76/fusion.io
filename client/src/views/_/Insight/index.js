import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import InsightArticle from './InsightArticle';
import InsightSidebar from './InsightSidebar';
import InsightsHeader from './../Insights/InsightsHeader'; // From another folder :(
import Footer from 'components/Footer';

const styles = theme => ({
  insights: {

  },
  insightsItem: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  }
});

class Insight extends Component {
  render() {
    const { classes } = this.props;

    return <>
      <InsightsHeader />
      <Grid
        className={classes.insightsItem}
        container
        justify='space-between'
        spacing={40}>
        <InsightArticle />
        <InsightSidebar />
      </Grid>
      <Footer />
    </>
  }
}

export default withStyles(styles)(Insight);