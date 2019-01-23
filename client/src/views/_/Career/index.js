import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Markdown from 'react-markdown';
import { FormattedMessage } from 'react-intl';

import Footer from 'components/Footer';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import {
  loadCareer,
} from 'actions/careers';

const styles = theme => ({
  description: {
    '& h3': {
      fontWeight: 500,
    },
    paddingBottom: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 2,
  },
  heading: {
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 7,
  },
  location: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
});

class Career extends Component {
  componentDidMount = () => {
    const { dispatch, match } = this.props;
    dispatch(loadCareer(match.params.careerId));
  };

  render() {
    const { career, classes } = this.props;

    if (typeof career === 'undefined') return null;

    return (
      <>
        <Grid container component='main' justify='space-around'>
          <Grid item md={1} />
          <Grid item md={6} xs={12}>
            <Typography align='left' className={classes.heading} variant='h4'>
              {career.role}
            </Typography>
            <Typography align='left' className={classes.location} variant='body2'>
              <b>
                <FormattedMessage id='career.location.descriptor' />
              </b>
              :
              {career.location}
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <b>
                <FormattedMessage id='career.requisition.descriptor' />
              </b>
              :
              {career._id}
            </Typography>
            <Typography
              align='left'
              component={Markdown}
              className={classes.description}
              variant='body2'
            >
              {career.description}
            </Typography>
          </Grid>
          <Grid item md={5} />
        </Grid>
        <Footer />
      </>
    );
  }
}

Career.propTypes = {
  career: PropTypes.shape({}).isRequired,
  classes: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
};

const select = state => ({
  career: state.careers.currentItem,
});

export default withStyles(styles)(connect(select)(Career));