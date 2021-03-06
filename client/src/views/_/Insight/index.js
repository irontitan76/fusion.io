import React, { Component } from 'react';
import { connect } from 'react-redux';

import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import Footer from 'components/Footer';

import InsightArticle from './InsightArticle';
import InsightSidebar from './InsightSidebar';
import InsightsHeader from '../Insights/InsightsHeader'; // From another folder :(

import {
  loadInsight
} from 'actions/insights';

const styles = theme => ({
  insights: {},
  insightsItem: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  main: {
    minHeight: '100%',
    overflowX: 'hidden',
  },
});

class Insight extends Component {
  componentDidMount() {
    const { dispatch, match: { params } } = this.props;
    dispatch(loadInsight(params.insightId));
  }

  render() {
    const { classes, history, insight = {} } = this.props;

    return <>
      <main className={classes.main}>
        <InsightsHeader history={history} />
        <Fade in timeout={{ enter: 500, exit: 500 }}>
          <Grid
            className={classes.insightsItem}
            container
            justify='center'
            spacing={40}>
            <InsightArticle insight={insight} />
            <InsightSidebar />
          </Grid>
        </Fade>
      </main>
      <Footer />
    </>;
  }
}

const select = state => ({
  insight: state.insights.currentItem,
});

export default withStyles(styles)(connect(select)(Insight));