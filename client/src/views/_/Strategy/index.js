import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from 'components/Footer';

class Strategy extends Component {
  render() {

    return <>
      <main>

      </main>
      <Footer />
    </>;
  }
}

const select = state => ({

});


export default connect(select)(Strategy);