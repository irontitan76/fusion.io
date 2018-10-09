import React, { Component } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { article } from './insight';

const styles = theme => ({
  article: {
    marginBottom: theme.spacing.unit * 5,
    marginTop: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
  articleByline: {
    padding: theme.spacing.unit * 3
  },
  articleBylineName: {},
  articleBylineRole: {
    color: theme.palette.gray
  },
  articleContent: {
    padding: theme.spacing.unit * 3,
    '& h2': {
      fontWeight: 300,
      paddingBottom: theme.spacing.unit,
      paddingTop: theme.spacing.unit * 2.5,
    }
  },
  articleDate: {
    fontWeight: 300,
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    paddingTop: theme.spacing.unit * 3,
  },
  articlePaper: {},
  articleSubtitle: {
    color: theme.palette.gray,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
  },
  articleTitle: {
    color: theme.palette.common.black,
    fontWeight: 500,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    paddingTop: theme.spacing.unit * 3,
  },
  articleAvatarItem: {
    [theme.breakpoints.down('xl')]: {
      marginRight: 0,
    },
    [theme.breakpoints.down('md')]: {
      marginRight: theme.spacing.unit * 2,
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing.unit * 4,
    },
  }
});

class InsightArticle extends Component {
  render() {
    const { classes } = this.props;
    const { _createdAt, author, content, media, subtitle, title } = article;

    return <Grid className={classes.article} item md={8} xs={12}>
      <Paper className={classes.articlePaper} elevation={1}>
        {
          (media && media.type === 'image')
            ? <img
                alt={ media.alt }
                src={ media.src}
                height={400}
                width='100%'
                />
            : null
        }
        <Typography
          className={classes.articleDate}
          variant='body2'>
          { _createdAt }
        </Typography>

        <Typography
          className={classes.articleTitle}
          variant='display1'>
          { title }
        </Typography>

        <Typography
          className={classes.articleSubtitle}
          variant='subheading'>
          { subtitle }
        </Typography>

        <Divider light />

        <Typography
          className={classes.articleContent}
          component='div'>
          { content }
        </Typography>
      </Paper>
      <Paper
        className={classes.articleByline}
        component={Grid}
        container
        elevation={1}>
        <Grid
          className={classes.articleAvatarItem}
          item
          xs={1}>
          <Avatar alt={ author.name } src={ author.avatar } />
        </Grid>
        <Grid item xs={9}>
          <Typography
            className={classes.articleBylineName}>
            { author.name }
          </Typography>
          <Typography
            className={classes.articleBylineRole}>
            { author.role }
          </Typography>
        </Grid>

      </Paper>
    </Grid>
  }
}

export default withStyles(styles)(InsightArticle);