import React, { Component } from 'react';
import Markdown from 'react-markdown';
import moment from 'moment';

import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

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
    '& h1,h2,h3': {
      fontWeight: 300,
      paddingBottom: theme.spacing.unit * .5,
      paddingTop: theme.spacing.unit * .5,
    },
    '& h4,h5,h6': {
      fontWeight: 300,
      paddingBottom: theme.spacing.unit * .25,
      paddingTop: theme.spacing.unit * .25,
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
  renderAuthor = () => {
    const { classes, insight } = this.props;
    const { author } = insight;

    if (!author) return null;

    return <Paper
      className={classes.articleByline}
      component={Grid}
      container
      elevation={1}>
      <Grid
        className={classes.articleAvatarItem}
        item
        xs={1}>
        <Avatar alt={author.name} src={author.avatar} />
      </Grid>
      <Grid item xs={9}>
        <Typography
          className={classes.articleBylineName}>
          {author.name}
        </Typography>
        <Typography
          className={classes.articleBylineRole}>
          {author.title}
        </Typography>
      </Grid>

    </Paper>;
  };

  render() {
    const { classes, insight, width } = this.props;
    const { _createdAt, content, media, subtitle, title } = insight;

    let img = null;
    if ( media && media.type === 'img' ) {
      img = <img
        alt={media.alt}
        src={media.src}
        height={400}
        width='100%' />
    }

    const createdAt = moment(_createdAt).format('YYYY-MM-DD');
    const html = <Markdown source={content} />;

    return insight && <Grid className={classes.article} item md={8} xl={5} xs={12}>
      <Paper
        className={classes.articlePaper}
        elevation={isWidthUp('md', width) ? 1 : 0}>
        {img}
        <Typography
          className={classes.articleDate}
          variant='body2'>
          {createdAt}
        </Typography>

        <Typography
          className={classes.articleTitle}
          variant='h4'>
          {title}
        </Typography>

        <Typography
          className={classes.articleSubtitle}
          variant='subtitle1'>
          {subtitle}
        </Typography>

        <Divider light />

        <Typography
          className={classes.articleContent}
          component='div'>
          {html}
        </Typography>
      </Paper>
      {this.renderAuthor()}
    </Grid>;
  }
}

export default withStyles(styles)(withWidth()(InsightArticle));