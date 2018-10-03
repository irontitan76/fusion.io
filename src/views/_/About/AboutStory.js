import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { story } from '../manifests/about';

const styles = theme => ({

});

class AboutStory extends Component {
  render() {
    return <Grid container>
      <Grid item xs={12}>
        <Grid alignItems='center' container justify='center'>
          <Grid item md={7} xs={12}>
            <Grid
              container
              justify='center'
              style={{
                height: 500,
                marginBottom: 50
              }}>
              <img { ...story.image } height='100%' width='100%'/>
            </Grid>
          </Grid>

          <Typography
            align='center'
            component={Grid}
            gutterBottom
            variant='display1'
            xs={12}>
            { story.title }
          </Typography>

          <Typography
            align='center'
            component={Grid}
            gutterBottom
            style={{ marginBottom: 50 }}
            variant='subheading'
            md={5}
            xs={11}>
            { story.subtitle }
          </Typography>


        </Grid>
      </Grid>
    </Grid>;
  }
}

export default withStyles(styles)(AboutStory);