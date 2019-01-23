import React, { Component } from 'react';

import Footer from 'components/Footer';
import HomeBanner from './HomeBanner';
import HomeHero from './HomeHero';
import HomeReasons from './HomeReasons';
import HomeServices from './HomeServices';
import HomeVideo from './HomeVideo';

// eslint-disable-next-line
class Home extends Component {
  render() {
    return (
      <>
        <main>
          <HomeHero />
          <HomeServices />
          <HomeBanner />
          <HomeVideo />
          <HomeReasons />
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;