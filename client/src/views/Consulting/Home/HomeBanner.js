import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { banner } from './home';

const styles = theme => ({
  banner: {
    backgroundColor: '#f2f2f2',
    minHeight: 175,
    paddingTop: theme.spacing.unit * 3,
  },
  bannerButton: {
    textAlign: 'center',
  },
  bannerButtonContainer1: {
    marginBottom: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit * 5,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginTop: theme.spacing.unit * 3,
    }
  },
  bannerButtonContainer2: {
    marginBottom: theme.spacing.unit * 5
  },
  bannerDescription: {

  },
  bannerDescriptionText: {
    fontWeight: 300
  },
});

class HomeServices extends Component {
  render() {
    const { classes } = this.props;
    const { button1, button2, description } = banner;

    return <Grid
      alignItems='center'
      className={classes.banner}
      container
      justify='center'>

      <Grid
        className={classes.bannerDescription}
        item
        md={6}
        sm={7}
        xs={10}>

        <Typography
          align='center'
          className={classes.bannerDescriptionText}
          variant='subheading'>
          { description }
        </Typography>

      </Grid>

      <Grid item xs={7}>

        <Grid container justify='center'>

          <Grid
            className={classes.bannerButtonContainer1}
            item
            md={3}
            xs={12}>
            <Button
              className={classes.bannerButton}
              color='primary'
              component={Link}
              fullWidth
              to={button1.path}
              variant='raised'>
              {button1.label}
            </Button>
          </Grid>

          <Grid
            className={classes.bannerButtonContainer2}
            item
            md={3}
            xs={12}>
            <Button
              className={classes.bannerButton}
              color='secondary'
              component={Link}
              fullWidth
              to={button2.path}
              variant='raised'>
              {button2.label}
            </Button>
          </Grid>

        </Grid>

      </Grid>
    </Grid>;
  };
}

export default withStyles(styles)(HomeServices);