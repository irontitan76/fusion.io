import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import Markdown from 'react-markdown';

import Grid from '@material-ui/core/Grid';
import RootRef from '@material-ui/core/RootRef';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  story: {
    backgroundColor: theme.palette.background.default,
    paddingBottom: theme.spacing.unit * 5,
    paddingTop: theme.spacing.unit * 7,
  },
  storyContent: {
    fontWeight: 300,
  },
  storyImageContainer: {
    height: 500,
    marginBottom: theme.spacing.unit * 5,
    [theme.breakpoints.up('xl')]: {
      height: 750,
    },
  },
  storySubtitle: {
    marginBottom: theme.spacing.unit * 5,
  },
});

class AboutStory extends Component {
  render() {
    const { classes, intl, storyRef } = this.props;

    const image = {
      alt: 'satellite',
      src: '/images/sat1.jpg',
    };

    return (
      <RootRef rootRef={storyRef}>
        <Grid
          className={classes.story}
          container
          ref={storyRef}
        >
          <Grid item xs={12}>
            <Grid alignItems='center' container justify='center'>
              <Grid item md={7} xs={12}>
                <Grid
                  className={classes.storyImageContainer}
                  container
                  justify='center'
                >
                  <img alt={image.alt} src={image.src + '/820/500?maintain=false'} />
                </Grid>
              </Grid>

              <Typography
                align='center'
                component={Grid}
                gutterBottom
                item
                variant='h4'
                xs={12}
              >
                <FormattedMessage id='about.story.title' />
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
                xs={11}
              >
                <FormattedMessage id='about.story.subtitle' />
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
                xs={11}
              >
                {/* Use Markdown component */}
                <Markdown source={intl.formatMessage({ id: 'about.story.content' })} />
              </Typography>

            </Grid>
          </Grid>

        </Grid>
      </RootRef>
    );
  }
}

AboutStory.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  intl: PropTypes.shape({}).isRequired,
  storyRef: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(injectIntl(AboutStory));