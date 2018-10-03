import React, { Component } from 'react';

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