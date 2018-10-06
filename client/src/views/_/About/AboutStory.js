import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { story } from './about';

const styles = theme => ({
  story: {

  },
  storyImageContainer: {
    height: 500,
    marginBottom: 50,
  },
  storySubtitle: {
    marginBottom: 50
  }
});

class AboutStory extends Component {
  render() {
    const { classes, storyRef } = this.props;

    return <Grid
      className={classes.story}
      container
      ref={ storyRef }>

      <Grid item xs={12}>
        <Grid alignItems='center' container justify='center'>
          <Grid item md={7} xs={12}>
            <Grid
              className={classes.storyImageContainer}
              container
              justify='center'>
              <img alt='' { ...story.image } height='100%' width='100%'/>
            </Grid>
          </Grid>

          <Typography
            align='center'
            component={Grid}
            gutterBottom
            item
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