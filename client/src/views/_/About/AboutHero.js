import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  hero: {
    backgroundImage: 'url("./images/main.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: 800,
    [theme.breakpoints.down('lg')]: {
      height: 550,
    },
    [theme.breakpoints.down('sm')]: {
      backgroundSize: '130% 100%'
    },
    [theme.breakpoints.down('xs')]: {
      backgroundSize: '180% 100%'
    }
  },
  heroButton: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    border: '1px solid white',
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.5)',
    }
  },
  heroContent: {
    backgroundColor: 'rgba(0,0,0,.1)',
    padding: theme.spacing.unit * 5
  },
  heroSubtitle: {
    color: '#f2f2f2',
    marginBottom: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2
  },
  heroTitle: {
    color: theme.palette.light,
    fontSize: 42,
    fontWeight: 300
  }
});

class AboutHero extends Component {
  render() {
    const { classes, intl, onClick } = this.props;

    return <Grid
      alignItems='center'
      className={classes.hero}
      container
      justify='center'>

      <Grid item xl={8} md={7} />

      <Grid item xl={3} md={4}>
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
            variant='h1'
            xs={12}>
            <FormattedMessage id='about.hero.title' />
          </Typography>

          <Typography
            align='center'
            className={classes.heroSubtitle}
            component={Grid}
            item
            xs={12}>
            <FormattedMessage id='about.hero.subtitle' />
          </Typography>

          <Grid item md={8} xs={8}>
            <Button
              aria-label={intl.formatMessage({ id: 'about.hero.button.label' })}
              className={classes.heroButton}
              fullWidth
              onClick={onClick}
              variant='outlined'>
              <FormattedMessage id='about.hero.button.label' />
            </Button>
          </Grid>

        </Grid>
      </Grid>
    </Grid>;
  }
}

export default withStyles(styles)(injectIntl(AboutHero));