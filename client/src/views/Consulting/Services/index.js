import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from 'components/Footer';
import ServicesHeader from './ServicesHeader';
import ServicesList from './ServicesList';

/* eslint-disable-next-line */
class Services extends Component {
  render() {
    return (
      <>
        <main>
          <ServicesHeader />
          <ServicesList />
        </main>
        <Footer />
      </>
    );
  }
}

const select = () => ({

});


export default connect(select)(Services);