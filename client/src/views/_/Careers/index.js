import React, { Component } from 'react';
import { connect } from 'react-redux';

import CareersGrid from './CareersGrid';
import CareersHero from './CareersHero';
import CareersList from './CareersList';
import CareersSearch from './CareersSearch';
import Footer from 'components/Footer';

import {
  loadCareers,
  unloadCareers,
} from 'actions/careers';

class Careers extends Component {
  state = {
    isFetching: false,
    isSearching: false,
    search: {},
  };

  onChange = event => {
    let { name, value } = event.target;

    if ( value === 'All teams' || value === 'All organizations' || value === 'Any organizations' ) {
      value = undefined;
    }

    this.setState({
      search: {
        ...this.state.search,
        [name]: value,
      }
    });
  };

  onSearch = event => {
    const { search } = this.state;
    const { dispatch } = this.props;
    const { value } = event.target;

    if ( value.length > 0 ) {
      this.setState({ isFetching: true, isSearching: true });
      dispatch(loadCareers({ search: value, ...search })).then(() => {
        this.setState({ isFetching: false });
      });
    } else {
      dispatch(unloadCareers());
      this.setState({ isFetching: false, isSearching: false })
    }
  };

  render() {
    const { isFetching, isSearching } = this.state;
    const { careers } = this.props;

    let content;
    if ( !isSearching ) {
      content = <>
        <CareersHero />
        <CareersGrid />
      </>;
    } else {
      content = <CareersList
        careers={careers}
        isFetching={isFetching}
        onChange={this.onChange} />
    }

    return <>
      <main style={{ minHeight: '100%', }}>
        <CareersSearch onSearch={this.onSearch} />
        {content}
      </main>
      <Footer />
    </>;
  }
}

const select = state => ({
  careers: state.careers,
});

export default connect(select)(Careers);