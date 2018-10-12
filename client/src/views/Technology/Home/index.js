import React, { Component } from 'react';

import HomeHero from './HomeHero';
import Footer from 'components/Footer';

class Home extends Component {
  render() {
    return <>
      <HomeHero />
      <Footer />
    </>;
  }
}

export default Home;