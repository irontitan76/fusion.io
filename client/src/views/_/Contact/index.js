import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import ContactForm from './ContactForm';
import ContactHeader from './ContactHeader';
import ContactLocations from './ContactLocations';
import Footer from 'components/Footer';

export class Contact extends Component {
  render() {
    return <>
      <main>
        <Grid
          container
          justify='center'>
          <ContactHeader
            subtitle="Fill out the form below and we'll put you in contact with one of our account representatives"
            title='Contact Us' />
          <ContactForm title='Contact Us' />
          <ContactLocations />
        </Grid>
      </main>
      <Footer />
    </>;
  }
}

export default Contact;

