import React, { Component } from 'react';
import { connect } from 'react-redux';

import ServicesHeader from './ServicesHeader';
import ServicesList from './ServicesList';
import Footer from 'components/Footer';

class Services extends Component {
  render() {

    return <>
      <main>
        <ServicesHeader />
        <ServicesList />
      </main>
      <Footer />
    </>
  }
}

const select = state => ({

});


export default connect(select)(Services);