import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  author: {
    color: 'inherit',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing.unit,
    },
  },
  banner: {
    backgroundColor: theme.palette.light,
    borderBottom: '1px solid #aaa',
    borderTop: '1px solid #aaa',
    marginBottom: theme.spacing.unit * 7,
  },
  bannerContent: {
    color: theme.palette.navy,
    padding: theme.spacing.unit * 5,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 0,
    },
  },
  quote: {
    color: 'inherit',
    fontSize: 18,
    fontWeight: 300,
    letterSpacing: .5,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing.unit * 3,
    },
  },
});

class AboutBanner extends Component {
  renderAuthor = () => {
    const { classes } = this.props;

    return (
      <Grid className={classes.bannerContent} item md={5} xs={12}>
        <Typography align='center' className={classes.author} variant='h6'>
          <FormattedMessage id='about.banner.author' />
        </Typography>
      </Grid>
    );
  };

  renderQuote = () => {
    const { classes } = this.props;

    return (
      <Grid className={classes.bannerContent} item md={7} xs={12}>
        <Typography align='left' className={classes.quote} variant='subtitle1'>
          <FormattedMessage id='about.banner.quote' />
        </Typography>
      </Grid>
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid
        alignItems='center'
        container
        className={classes.banner}
        justify='space-around'
      >
        {this.renderAuthor()}
        {this.renderQuote()}
      </Grid>
    );
  }
}

AboutBanner.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(AboutBanner);