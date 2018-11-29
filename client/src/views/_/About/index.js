import React, { Component } from 'react';

import AboutBanner from './AboutBanner'
import AboutHero from './AboutHero';
// import AboutOrgs from './AboutOrgs';
import AboutStory from './AboutStory';
import AboutValues from './AboutValues';
import Footer from 'components/Footer';

class About extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }

  scrollToStory = () => {
    window.scroll({ top: this.myRef.current.offsetTop, behavior: 'smooth' });
  };

  render() {
    return <>
      <main>
        <AboutHero onClick={this.scrollToStory} />
        <AboutValues />
        <AboutBanner />
        <AboutStory storyRef={this.myRef}/>
      </main>
      <Footer />
    </>;
  }
}

export default About;