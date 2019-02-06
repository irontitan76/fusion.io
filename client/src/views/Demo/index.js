/* eslint-disable */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Authentication from 'components/v2/Authentication';
import Hero from 'components/v2/Hero';

class Demo extends Component {
  render() {
    return (
      <Hero position='center-right' spacing='md'>
        <Grid item>

        </Grid>
      </Hero>
    );

    // const fields = [
    //   {
    //     label: 'Username',
    //     name: 'Username',
    //     placeholder: 'Type your username...',
    //     type: 'text',
    //   },
    //   {
    //     label: 'Password',
    //     name: 'Password',
    //     placeholder: 'Type your password...',
    //     type: 'password',
    //   }
    // ]

    // return (
    //   <Authentication
    //     copyright='2019 Fusion Industries. All Rights Reserved.'
    //     fields={fields}
    //     logo={<FontAwesomeIcon icon={['fal', 'atom-alt']} size='7x' style={{ color: '#0074D9' }} />}
    //     submit={['Login', () => null]}
    //     title={<h1 style={{ fontWeight: 300, letterSpacing: 10 }}>FUSION</h1>}
    //   />
    // );
  }
}

export default Demo;