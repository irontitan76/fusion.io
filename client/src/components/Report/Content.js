import React, { Component } from 'react';
import Markdown from 'react-markdown';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  contentBody: {
    '& blockquote': {
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      borderTop: '1px solid rgba(0, 0, 0, 0.12)',
      fontWeight: 500,
      fontSize: 14,
      marginBottom: 16,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 16,
      '& em': {
        fontWeight: 300,
      }
    }
  },
  root: {
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
});

class ReportContent extends Component {
  render() {
    const { body, classes } = this.props;

    return <Grid className={classes.root} container justify='center'>
      <Grid item xl={5} md={6} xs={12}>
        <Typography
          className={classes.contentBody}
          component='div'
          variant='body2'>
          <Markdown source={body} />
        </Typography>
      </Grid>
    </Grid>;
  }
}

export default withStyles(styles)(ReportContent);