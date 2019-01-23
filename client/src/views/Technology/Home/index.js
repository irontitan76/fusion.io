import React, { Component } from 'react';

import Footer from 'components/Footer';
import HomeHero from './HomeHero';
import HomeHighlights from './HomeHighlights';

// eslint-disable-next-line
class Home extends Component {
  render() {
    return (
      <>
        <main style={{ minHeight: '100%' }}>
          <HomeHero />
          <HomeHighlights />
          <div style={{ minHeight: 500 }} />
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;