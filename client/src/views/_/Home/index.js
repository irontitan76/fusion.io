import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import Footer from 'components/Footer';
import HomeHero from './HomeHero';
import HomeLogos from './HomeLogos';
import HomeOverview from './HomeOverview';
import HomeProducts from './HomeProducts';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100%',
  },
});

const Home = (props) => {
  const { classes } = props;

  return (
    <>
      <main className={classes.root}>
        <HomeHero />
        <HomeLogos />
        <HomeOverview />
        <HomeProducts />
      </main>
      <Footer />
    </>
  );
};

Home.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Home);