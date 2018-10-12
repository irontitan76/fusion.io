import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from 'components/Footer';
import SolutionsHeader from './SolutionsHeader';

import { loadProducts } from 'actions/products';

class Solutions extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadProducts());
  }

  render() {

    return <>
      <main>
        <SolutionsHeader />
      </main>
      <Footer />
    </>
  }
}

const select = state => ({

});


export default connect(select)(Solutions);