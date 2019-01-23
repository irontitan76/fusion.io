import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import Footer from 'components/Footer';
import HomeHero from './HomeHero';
import HomeHighlights from './HomeHighlights';

const styles = theme => {
  const { palette } = theme;

  return {
    root: {
      backgroundColor: palette.background.default,
      minHeight: '100%',
    },
  };
};

// eslint-disable-next-line
class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <main className={classes.root}>
          <HomeHero />
          <HomeHighlights />
          <div style={{ minHeight: 500 }} />
        </main>
        <Footer />
      </>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Home);