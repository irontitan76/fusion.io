import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({

});

class HomeFeature extends Component {
  render() {
    const { classes } = this.props;

    return <Grid container justify='center'>
      <Grid item xs={12}>
        <Typography
          align='center'
          variant='title'>
          Features
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant='subheading'>Social</Typography>
      </Grid>
    </Grid>;
  }
}

export default withStyles(styles)(HomeFeature);