import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
  },
  title: {
    fontSize: 14
  },
});

class ProfileOverview extends Component {
  render() {
    const { classes } = this.props;

    return <Grid
      className={classes.root}
      container
      justify='space-around'>

      <Card component={Grid} item md={3} xs={12}>
        <CardContent>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom>
            Total Insights
          </Typography>
        </CardContent>
      </Card>

    </Grid>;
  }
}

export default withStyles(styles)(ProfileOverview);