import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from 'components/Footer';

import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import {
  loadCareer,
} from 'actions/careers';

const styles = theme => ({
  description: {
    paddingBottom: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 5,
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
  }
});

class Career extends Component {
  componentDidMount = () => {
    const { dispatch, match } = this.props;
    dispatch(loadCareer(match.params.careerId));
  };

  render() {
    const { career, classes } = this.props;

    if ( typeof career === 'undefined' ) return null;

    return <>
      <main>
        <Typography
          align='left'
          className={classes.heading}
          variant='h4'>
          {career.role}
        </Typography>
        <Typography
          align='left'
          className={classes.location}
          variant='body2'>
          <b>Location</b>: {career.location && `${career.location.city}, ${career.location.state}`}
          &nbsp;&nbsp;|&nbsp;&nbsp;<b>Requisition ID</b>: {career._id}
        </Typography>
        <Typography
          align='left'
          className={classes.description}
          variant='body2'>
          {career.description}
        </Typography>
      </main>
      <Footer />
    </>;
  }
}

const select = state => ({
  career: state.careers.currentRole,
});

export default withStyles(styles)(connect(select)(Career));