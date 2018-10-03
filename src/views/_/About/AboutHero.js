import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { hero } from './about';

const styles = theme => ({
  hero: {
    backgroundImage: 'url("./images/camp3-1x.webp")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: 600,
    [theme.breakpoints.up('xl')]: {
      height: 850,
    },
    [theme.breakpoints.down('sm')]: {
      backgroundSize: '130% 100%'
    },
    [theme.breakpoints.down('xs')]: {
      backgroundSize: '180% 100%'
    }
  },
  heroButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '1px solid white',
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.5)',
    }
  },
  heroContent: {
    backgroundColor: 'rgba(0,0,0,.6)',
    padding: theme.spacing.unit * 5
  },
  heroSubtitle: {
    color: '#f2f2f2',
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2
  },
  heroTitle: {
    color: '#f2f2f2',
    fontSize: 42,
    fontWeight: 300
  }
});

class AboutHero extends Component {
  render() {
    const { classes } = this.props;

    return <Grid
      alignItems='center'
      className={classes.hero}
      container
      justify='center'>

      <Grid item xl={5} md={7}>
        <Grid
          alignItems='center'
          className={classes.heroContent}
          container
          justify='center'>

          <Typography
            align='center'
            className={classes.heroTitle}
            component={Grid}
            item
            variant='display1'
            xs={12}>
            { hero.title }
          </Typography>

          <Typography
            align='center'
            className={classes.heroSubtitle}
            component={Grid}
            item
            md={12}
            xs={12}>
            { hero.subtitle }
          </Typography>

          <Grid item md={4} xs={8}>
            <Button
              className={classes.heroButton}
              href={ hero.button.path }
              fullWidth
              variant='outlined'>
              { hero.button.label }
            </Button>
          </Grid>

        </Grid>
      </Grid>
    </Grid>;
  }
}

export default withStyles(styles)(AboutHero);