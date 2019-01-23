import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Footer from 'components/Footer';
import { loadProducts } from 'actions/products';
import SolutionsHeader from './SolutionsHeader';


class Solutions extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadProducts());
  }

  render() {
    return (
      <>
        <main>
          <SolutionsHeader />
        </main>
        <Footer />
      </>
    );
  }
}

Solutions.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const select = () => ({

});

export default connect(select)(Solutions);