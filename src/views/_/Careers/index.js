import React, { Component } from 'react';

import CareersGrid from './CareersGrid';
import CareersHero from './CareersHero';
import CareersSearch from './CareersSearch';
import Footer from 'components/Footer';

class Careers extends Component {
  render() {
    return <>
      <CareersSearch />
      <CareersHero />
      <CareersGrid />
      <Footer />
    </>
  }
}

export default Careers;