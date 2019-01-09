import React, { Component } from 'react';
import { injectIntl } from 'react-intl';

import Grid from '@material-ui/core/Grid';

import ContactForm from './ContactForm';
import ContactHeader from './ContactHeader';
import ContactLocations from './ContactLocations';
import Footer from 'components/Footer';

export class Contact extends Component {
  render() {
    const { intl } = this.props;

    return <>
      <main>
        <Grid
          container
          justify='center'>
          <ContactHeader
            subtitle={intl.formatMessage({ id: 'contact.form.subtitle' })}
            title={intl.formatMessage({ id: 'contact.form.title' })} />
          <ContactForm title={intl.formatMessage({ id: 'contact.form.title' })} />
          <ContactLocations />
        </Grid>
      </main>
      <Footer />
    </>;
  }
}

export default injectIntl(Contact);

