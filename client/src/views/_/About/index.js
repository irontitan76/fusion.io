import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AboutBanner from './AboutBanner'
import AboutHero from './AboutHero';
import AboutStory from './AboutStory';
import AboutValues from './AboutValues';
import Footer from 'components/Footer';

class About extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }

  scrollToStory = () => {
    const node = ReactDOM.findDOMNode(this.myRef.current);
    node.scrollIntoView({ block: 'center',  behavior: 'smooth' });
  };

  render() {
    return <>
      <AboutHero onClick={this.scrollToStory} />
      <AboutValues />
      <AboutBanner />
      <AboutStory storyRef={this.myRef}/>
      <Footer />
    </>;
  }
}

export default About;