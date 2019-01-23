import React, { Component } from 'react';

import Footer from 'components/Footer';
import ReportContent from 'components/Report/Content';
import ReportHeader from 'components/Report/Header';

// eslint-disable-next-line
class TermsOfUse extends Component {
  render() {
    return (
      <>
        <main>
          <ReportHeader
            divider
            variant='h1'
          >
          Terms of Use
          </ReportHeader>
          <ReportContent>
          Test
          </ReportContent>
        </main>
        <Footer />
      </>
    );
  }
}

export default TermsOfUse;