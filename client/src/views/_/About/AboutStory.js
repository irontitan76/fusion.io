import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import RootRef from '@material-ui/core/RootRef';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { breakLine } from 'common/functions';
import { story } from './about';

const styles = theme => ({
  story: {
    marginBottom: theme.spacing.unit * 5,
  },
  storyContent: {
    fontWeight: 300,
  },
  storyImageContainer: {
    height: 500,
    marginBottom: theme.spacing.unit * 5,
    [theme.breakpoints.up('xl')]: {
      height: 750,
    }
  },
  storySubtitle: {
    marginBottom: theme.spacing.unit * 5,
  }
});

class AboutStory extends Component {
  render() {
    const { classes, storyRef } = this.props;

    return <RootRef rootRef={storyRef}>
      <Grid
        className={classes.story}
        container
        ref={storyRef}>

        <Grid item xs={12}>
          <Grid alignItems='center' container justify='center'>
            <Grid item md={7} xs={12}>
              <Grid
                className={classes.storyImageContainer}
                container
                justify='center'>
                <img alt={story.image.alt} src={story.image.src + '/820/500?maintain=false'} />
              </Grid>
            </Grid>

            <Typography
              align='center'
              component={Grid}
              gutterBottom
              item
              variant='h4'
              xs={12}>
              {story.title}
            </Typography>

            <Typography
              align='center'
              className={classes.storySubtitle}
              component={Grid}
              gutterBottom
              item
              variant='subtitle1'
              xl={7}
              md={5}
              xs={11}>
              {story.subtitle}
            </Typography>

            <Typography
              align='left'
              className={classes.storyContent}
              component={Grid}
              gutterBottom
              item
              variant='body2'
              xl={6}
              md={8}
              xs={11}>
              {breakLine(story.content, 'left')}
            </Typography>

          </Grid>
        </Grid>

      </Grid>
    </RootRef>
  }
}

export default withStyles(styles)(AboutStory);