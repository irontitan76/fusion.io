import React, { Component } from 'react';

import Footer from 'components/Footer';
import ReportContent from 'components/Report/Content';
import ReportHeader from 'components/Report/Header';

class Privacy extends Component {
  render() {
    return <>
      <main>
        <ReportHeader
          divider
          variant='h1'>
          Privacy Policy
        </ReportHeader>
        <ReportContent>
          Test
        </ReportContent>
      </main>
      <Footer />
    </>;
  }
}

export default Privacy;