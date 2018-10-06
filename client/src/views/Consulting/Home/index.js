import React, { Component } from 'react';

import HomeBanner from './HomeBanner';
import HomeHero from './HomeHero';
import HomeServices from './HomeServices';
import Footer from 'components/Footer';

class Home extends Component {
  render() {
    return <>
      <HomeHero />
      <HomeServices />
      <HomeBanner />
      <Footer />
    </>
  }
}

export default Home;