import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  logo: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
  },
  logoContainer: {
    textDecoration: 'none',
  },
  logoDisabled: {
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
  },
  logos: {
    margin: 'auto',
    marginBottom: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
});

class HomeLogos extends Component {
  renderLogos = () => {
    const { classes } = this.props;

    const items = [{
      disabled: true,
      icon: 'brain',
      label: 'home.logo[0].name',
      to: '/ai',
    },
    {
      disabled: false,
      icon: 'users',
      label: 'home.logo[1].name',
      to: '/consulting',
    },
    {
      disabled: true,
      icon: 'space-shuttle',
      label: 'home.logo[2].name',
      to: '/cosmos',
    },
    {
      disabled: true,
      icon: 'solar-panel',
      label: 'home.logo[3].name',
      to: '/energy',
    },
    {
      disabled: true,
      icon: 'credit-card-blank',
      label: 'home.logo[4].name',
      to: '/finance',
    },
    {
      disabled: true,
      icon: 'dna',
      label: 'home.logo[5].name',
      to: '/health',
    },
    {
      disabled: true,
      icon: 'balance-scale',
      label: 'home.logo[6].name',
      to: '/legal',
    },
    {
      disabled: true,
      icon: 'broadcast-tower',
      label: 'home.logo[7].name',
      to: '/media',
    },
    {
      disabled: false,
      icon: 'code',
      label: 'home.logo[8].name',
      to: '/technology',
    },
    {
      disabled: true,
      icon: 'map-marked',
      label: 'home.logo[9].name',
      to: '/transport',
    },
    ];

    return items.map((item) => (
      <Grid
        className={item.disabled ? classes.logoDisabled : classes.logo}
        item
        key={item.label}
        md={1}
        xs={3}
      >
        <Typography
          align='center'
          className={classes.logoContainer}
          component={item.disabled ? 'div' : Link}
          to={item.disabled ? null : item.to}
        >
          <FontAwesomeIcon
            color={item.disabled ? '#bbb' : '#0074D9'}
            icon={['fal', item.icon]}
            size='2x'
            style={{ marginBottom: 20 }}
          />
          <Typography>
            <FormattedMessage id={item.label} />
          </Typography>
        </Typography>
      </Grid>
    ));
  }

  render() {
    const { classes } = this.props;

    return (
      <Hidden smDown>
        <Grid
          className={classes.logos}
          container
          justify='space-around'
          spacing={24}
        >
          <Grid item xs={12}>
            <Grid container justify='space-evenly'>
              {this.renderLogos()}
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    );
  }
}

HomeLogos.defaultProps = {};
HomeLogos.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(HomeLogos);