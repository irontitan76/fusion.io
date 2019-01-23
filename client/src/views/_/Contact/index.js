import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';

import Grid from '@material-ui/core/Grid';

import Footer from 'components/Footer';

import ContactForm from './ContactForm';
import ContactHeader from './ContactHeader';
import ContactLocations from './ContactLocations';

class Contact extends Component {
  renderContent = () => {
    const { intl } = this.props;

    return (
      <>
        <ContactHeader
          subtitle={intl.formatMessage({ id: 'contact.form.subtitle' })}
          title={intl.formatMessage({ id: 'contact.form.title' })}
        />
        <ContactForm title={intl.formatMessage({ id: 'contact.form.title' })} />
        <ContactLocations />
      </>
    );
  }

  render() {
    return (
      <>
        <main>
          <Grid container justify='center'>
            {this.renderContent()}
          </Grid>
        </main>
        <Footer />
      </>
    );
  }
}

Contact.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Contact);
