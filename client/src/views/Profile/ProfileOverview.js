import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  card: {
  },
  cardContent: {
    paddingBottom: theme.spacing.unit * 2,
  },
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
      justify='space-around'
      spacing={16}>

      <Card className={classes.card} component={Grid} item md={2} xs={12}>
        <CardHeader subheader='Total Insights' />
        <CardContent className={classes.cardContent}>
          <Typography align='center' variant='h4'></Typography>
        </CardContent>
      </Card>


    </Grid>;
  }
}

export default withStyles(styles)(ProfileOverview);