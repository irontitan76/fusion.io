import React, { Component } from 'react';
import { connect } from 'react-redux';

import CareersGrid from './CareersGrid';
import CareersHero from './CareersHero';
import CareersList from './CareersList';
import CareersSearch from './CareersSearch';
import Footer from 'components/Footer';

import {
  filterCareers,
  loadCareers,
  searchCareers,
  unloadCareers,
} from 'actions/careers';

class Careers extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(loadCareers());
  };

  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch(unloadCareers());
  };

  onChange = event => {
    const { dispatch, careers: { filters, search } } = this.props;
    let { name, value } = event.target;

    if ( value.includes('All') || value.includes('Any') ) {
      value = undefined;
    }

    dispatch(filterCareers(name, value)).then((action) => {
      const { name, value } = action.payload;
      const fullSearch = { search, ...filters, ...{ [name]: value } };
      dispatch(loadCareers(fullSearch)).then(() => {
        dispatch(searchCareers(search, false, true));
      });
    });
  };

  onSearch = event => {
    const { dispatch, careers: { filters } } = this.props;
    const { value } = event.target;

    if ( value.length > 0 ) {
      dispatch(searchCareers(value, true, true)).then(() => {
        dispatch(loadCareers({ search: value, ...filters })).then(() => {
          dispatch(searchCareers(value, false, true));
        });
      });
    } else {
      dispatch(unloadCareers()).then(() => {
        const isSearching = Object.keys(filters).length > 0;

        if ( !isSearching ) {
          dispatch(searchCareers(value, false, false));
        }
      });
    }
  };

  render() {
    const { careers } = this.props;
    let content;
    if ( !careers.isSearching ) {
      content = <>
        <CareersHero />
        <CareersGrid onClick={this.onChange}/>
      </>;
    } else {
      content = <CareersList careers={careers} onChange={this.onChange} />;
    }

    return <>
      <main style={{ minHeight: '100%', }}>
        <CareersSearch onCancel={this.onCancel} onSearch={this.onSearch} />
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