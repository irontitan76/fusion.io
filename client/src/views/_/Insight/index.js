import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import Footer from 'components/Footer';

import {
  loadInsight,
} from 'actions/insights';
import InsightArticle from './InsightArticle';
import InsightSidebar from './InsightSidebar';
import InsightsHeader from '../Insights/InsightsHeader'; // From another folder :(


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
    backgroundColor: theme.palette.background.default,
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
    const { classes, dispatch, history, insight = {} } = this.props;

    return (
      <>
        <main className={classes.main}>
          <InsightsHeader dispatch={dispatch} history={history} />
          <Fade in timeout={{ enter: 500, exit: 500 }}>
            <Grid
              className={classes.insightsItem}
              container
              justify='center'
              spacing={40}
            >
              <InsightArticle insight={insight} />
              <InsightSidebar />
            </Grid>
          </Fade>
        </main>
        <Footer />
      </>
    );
  }
}

Insight.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  insight: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
};

const select = state => ({
  insight: state.insights.currentItem,
});

export default withStyles(styles)(connect(select)(Insight));