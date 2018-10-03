import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import HomeHero from './HomeHero';
import HomeOverview from './HomeOverview';
import HomeProducts from './HomeProducts';
import Footer from 'components/Footer';

class Home extends Component {
  render() {
    return <>
      <HomeHero />
      <HomeOverview />
      <HomeProducts />
      <Footer />
    </>
  }
}

export default Home;