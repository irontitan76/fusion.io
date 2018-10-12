import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import ContactForm from './ContactForm';
import ContactHeader from './ContactHeader';
import Footer from 'components/Footer';
import { fields, subtitle, title } from './contact';

const styles = theme => ({
  contact: {},
});

export class Contact extends Component {
  render() {
    const { classes } = this.props;

    return <>
      <main>
        <Grid
          className={classes.contact}
          container
          justify='center'>
          <ContactHeader subtitle={subtitle} title={title}/>
          <ContactForm fields={fields} title={title}/>
        </Grid>
      </main>
      <Footer />
    </>;
  }
}

const select = state => ({

});

export default withStyles(styles)(connect(select)(Contact));

