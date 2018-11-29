import React, { Component } from 'react';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  strategyQuote: {}
});

class StandardQuote extends Component {
  render() {
    const { author, classes, quote } = this.props;

    return <Grid className={classes.root} container justify='center'>
      <Grid item xl={5} md={6} xs={12}>
        <Typography component='div'>
          <Divider />

          <p style={{ fontWeight: 500, fontSize: 16, }}>
            &#34;{quote}&#34;

            <i style={{ fontWeight: 300, fontSize: 14, }}>
              &emsp;&mdash; {author}
            </i>
          </p>
          <Divider />
        </Typography>
      </Grid>
    </Grid>;
  }
}

export default withStyles(styles)(StandardQuote);