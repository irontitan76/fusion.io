import React, { Component } from 'react';

import Footer from 'components/Footer';
import ReportContent from 'components/Report/Content';
import ReportHeader from 'components/Report/Header';

class SiteMap extends Component {
  render() {
    return <>
      <main>
        <ReportHeader
          divider={true}
          variant='h1'>
          Site Map
        </ReportHeader>
        <ReportContent>
          Test
        </ReportContent>
      </main>
      <Footer />
    </>;
  }
}

export default SiteMap;