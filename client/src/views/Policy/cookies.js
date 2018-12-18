import React, { Component } from 'react';

import Footer from 'components/Footer';
import ReportContent from 'components/Report/Content';
import ReportHeader from 'components/Report/Header';

class Cookies extends Component {
  render() {
    return <>
      <main>
        <ReportHeader
          divider
          variant='h1'>
          Cookie Policy
        </ReportHeader>
        <ReportContent>
          Test
        </ReportContent>
      </main>
      <Footer />
    </>;
  }
}

export default Cookies;