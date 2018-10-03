import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { story } from './about';

const styles = theme => ({
  storySubtitle: {
    marginBottom: 50
  }
});

class AboutStory extends Component {
  render() {
    const { classes } = this.props;
    
    return <Grid container id='story'>
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
              <img alt='' { ...story.image } height='100%' width='100%'/>
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
            className={classes.storySubtitle}
            component={Grid}
            gutterBottom
            item
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