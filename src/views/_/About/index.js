import React, { Component } from 'react';

import AboutBanner from './AboutBanner'
import AboutHero from './AboutHero';
import AboutStory from './AboutStory';
import AboutValues from './AboutValues';
import Footer from 'components/Footer';

class About extends Component {
  render() {
    return <>
      <AboutHero />
      <AboutValues />
      <AboutBanner />
      <AboutStory />
      <Footer />
    </>;
  }
}

export default About;