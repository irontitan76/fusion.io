import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => {
  const { breakpoints, palette, spacing } = theme;
  const isDark = palette.type === 'dark';
  return {
    hero: {
      backgroundImage: 'url("./images/main.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      height: 800,
      [breakpoints.down('lg')]: {
        height: 550,
      },
      [breakpoints.down('sm')]: {
        backgroundSize: '130% 100%',
      },
      [breakpoints.down('xs')]: {
        backgroundSize: '180% 100%',
      },
    },
    heroButton: {
      '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.5)',
      },
      backgroundColor: 'rgba(255,255,255,0.3)',
      border: '1px solid white',
      color: palette.common.white,
    },
    heroContent: {
      backgroundColor: `${palette.background.default}${isDark ? 80 : 25}`,
      padding: spacing.unit * 5,
    },
    heroSubtitle: {
      color: palette.common.white,
      marginBottom: spacing.unit * 3,
      paddingBottom: spacing.unit * 2,
      paddingTop: spacing.unit * 2,
    },
    heroTitle: {
      color: palette.common.white,
      fontSize: 42,
      fontWeight: 300,
    },
  };
};

class AboutHero extends Component {
  renderButton = () => {
    const { classes, intl, onClick } = this.props;

    return (
      <Grid item md={8} xs={8}>
        <Button
          aria-label={intl.formatMessage({ id: 'about.hero.button.label' })}
          className={classes.heroButton}
          fullWidth
          onClick={onClick}
          variant='outlined'
        >
          <FormattedMessage id='about.hero.button.label' />
        </Button>
      </Grid>
    );
  };

  renderSubtitle = () => {
    const { classes } = this.props;

    return (
      <Typography
        align='center'
        className={classes.heroSubtitle}
        component={Grid}
        item
        xs={12}
      >
        <FormattedMessage id='about.hero.subtitle' />
      </Typography>
    );
  };

  renderTitle = () => {
    const { classes } = this.props;

    return (
      <Typography
        align='center'
        className={classes.heroTitle}
        component={Grid}
        item
        variant='h1'
        xs={12}
      >
        <FormattedMessage id='about.hero.title' />
      </Typography>
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid alignItems='center' className={classes.hero} container justify='center'>
        <Grid item md={7} xl={8} />

        <Grid item md={4} xl={3}>
          <Grid
            alignItems='center'
            className={classes.heroContent}
            container
            justify='center'
          >
            {this.renderTitle()}
            {this.renderSubtitle()}
            {this.renderButton()}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

AboutHero.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  intl: intlShape.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(injectIntl(AboutHero));