import React, { Component } from 'react';

import CareersGrid from './CareersGrid';
import CareersHero from './CareersHero';
import CareersList from './CareersList';
import CareersSearch from './CareersSearch';
import Footer from 'components/Footer';

class Careers extends Component {
  state = {
    search: this.props.location.search,
  };

  onSearch = event => {
    const { location } = this.props;

    if ( event.target.value === '' ) {
      this.setState({ search: location.search });
    } else {
      this.setState({ search: event.target.value });
    }

  };

  render() {
    const { search } = this.state;

    let content;
    if ( search === '' ) {
      content = <>
        <CareersHero />
        <CareersGrid />
      </>;
    } else {
      content = <CareersList search={search} />
    }

    return <>
      <main>
        <CareersSearch onSearch={this.onSearch}/>
        {content}
      </main>
      <Footer />
    </>;
  }
}

export default Careers;