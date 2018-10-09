import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { banner } from './about';

const styles = theme => ({
  author: {
    fontSize: 18,
    fontWeight: 300,
    marginBottom: theme.spacing.unit * 5,
  },
  banner: {
    backgroundColor: '#ddd',
    borderTop: '1px solid #aaa',
    borderBottom: '1px solid #aaa',
    marginBottom: theme.spacing.unit * 7,
  },
  quote: {
    fontSize: 20,
    fontWeight: 300,
    padding: theme.spacing.unit * 5,
  }
});

class AboutBanner extends Component {
  render() {
    const { classes } = this.props;

    return <Grid container>
      <Grid className={classes.banner} item xs={12}>
        <Typography
          align='center'
          className={classes.quote}
          variant='subheading'>
          { banner.quote }
        </Typography>

        <Typography
          align='center'
          className={classes.author}
          variant='subheading'>
          { banner.author }
        </Typography>
      </Grid>
    </Grid>;
  }
}

export default withStyles(styles)(AboutBanner);