import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { logos } from './home';

const styles = theme => ({
  logo: {
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    '&:hover': {
      backgroundColor: theme.palette.offwhite,
    }
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
    }
  },
});

class HomeLogos extends Component {
  renderLogos = () => {
    const { classes } = this.props;
    const { items } = logos;

    return items.map((item, key) => (
      <Grid
        className={item.disabled ? classes.logoDisabled : classes.logo}
        item
        key={key}
        md={1}
        xs={3}>
        <Typography
          align='center'
          component={item.disabled ? 'div' : Link}
          to={item.disabled ? null : item.to}
          style={{ textDecoration: 'none' }}>
          <FontAwesomeIcon
            color={item.disabled ? '#bbb' : '#0074D9'}
            icon={[ 'fal', item.icon] }
            size='2x'
            style={{ marginBottom: 20 }} />
          <Typography>{item.label}</Typography>
        </Typography>
      </Grid>
    ));
  }
  render() {
    const { classes } = this.props;

    return <Hidden smDown>
      <Grid
        className={classes.logos}
        container
        justify='space-around'
        spacing={24}>
        <Grid item xs={12}>
          <Grid container justify='space-evenly'>
            {this.renderLogos()}
          </Grid>
        </Grid>
      </Grid>
    </Hidden>;
  };
}

HomeLogos.defaultProps ={};
HomeLogos.propTypes = {};

export default withStyles(styles)(HomeLogos);