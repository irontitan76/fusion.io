import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    backgroundColor: 'rgb(250,251,252)',
    borderLeft: '1px solid rgba(0,0,0,.12)',
  },
  text: {
    fontWeight: 300,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  title: {
    fontWeight: 400,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 3,
  },
});

class Sample extends Component {
  render() {
    const { classes } = this.props;

    return <Grid className={classes.root} item md={4}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            className={classes.title}
            variant='h6'>
            Tips & Tricks
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={classes.title}
            variant='subtitle1'>
            Headings
          </Typography>
          <Typography className={classes.text}>
            Headings are written on a single line that start with '#' then the
            content followed by a line break, e.g., '# Heading 1'.
          </Typography>
          <Typography
            className={classes.title}
            variant='subtitle1'>
            Text
          </Typography>
          <Typography className={classes.text}>
            Paragraphs are separated by line breaks. Emphase by surrounding the
            content by '*'. Embolden by surrounding content by '_'.
          </Typography>
          <Typography
            className={classes.title}
            variant='subtitle1'>
            Quotes
          </Typography>
          <Typography className={classes.text} component='div'>
            Quotes are written on 2 lines. On the 1st line, type '>' then
            the quote. On the 2nd line, type the quote's author surrounded by
            '*'.
            <p style={{ marginBottom: 0 }}>&gt; "Quote text"</p>
            <p style={{ margin: 0 }}>*Author*</p>
          </Typography>
          <Typography
            className={classes.title}
            variant='subtitle1'>
            Lists
          </Typography>
          <Typography className={classes.text}>
            There are two types of lists - ordered and unordered.
          </Typography>
          <Typography className={classes.text} style={{ marginTop: 16 }}>
            Note that you may not use pure HTML to create
            article content.
            Learn more at&nbsp;
            <a href='https://www.markdownguide.org/'>
              {'https://www.markdownguide.org'}
            </a>.
          </Typography>
        </Grid>
      </Grid>
    </Grid>;
  }
}

export default withStyles(styles)(Sample);