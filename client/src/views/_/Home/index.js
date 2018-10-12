import React, { Component } from 'react';

import HomeHero from './HomeHero';
import HomeLogos from './HomeLogos';
import HomeOverview from './HomeOverview';
import HomeProducts from './HomeProducts';
import Footer from 'components/Footer';

class Home extends Component {
  render() {
    return <>
      <main>
        <HomeHero />
        <HomeLogos />
        <HomeOverview />
        <HomeProducts />
      </main>
      <Footer />
    </>;
  }
}

export default Home;