import React from 'react';

import Footer from 'components/Footer';
import HomeHero from './HomeHero';
import HomeLogos from './HomeLogos';
import HomeOverview from './HomeOverview';
import HomeProducts from './HomeProducts';

const Home = () => {
  return (
    <>
      <main>
        <HomeHero />
        <HomeLogos />
        <HomeOverview />
        <HomeProducts />
      </main>
      <Footer />
    </>
  );
};

export default Home;