import React, { Component } from 'react';

import Footer from 'components/Footer';

import AboutBanner from './AboutBanner';
import AboutHero from './AboutHero';
import AboutStory from './AboutStory';
import AboutValues from './AboutValues';

class About extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }

  scrollToStory = () => {
    window.scroll({ behavior: 'smooth', top: this.myRef.current.offsetTop });
  };

  render() {
    return (
      <>
        <main>
          <AboutHero onClick={this.scrollToStory} />
          <AboutValues />
          <AboutBanner />
          <AboutStory storyRef={this.myRef} />
        </main>
        <Footer />
      </>
    );
  }
}

export default About;