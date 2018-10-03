import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import TabBar from 'components/TabBar';
import { values } from '../manifests/about';

const styles = theme => ({

});

class AboutValues extends Component {
  render() {
    return <Grid
      alignItems='center'
      container
      justify='center'>

      <TabBar name={values.title} values={values.items} />
    </Grid>;
  }
}

export default withStyles(styles)(AboutValues);