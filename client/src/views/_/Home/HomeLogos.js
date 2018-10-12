import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Grid from '@material-ui/core/Grid';
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
  render() {
    const { classes } = this.props;

    return <Grid
      className={classes.logos}
      container
      justify='space-around'
      spacing={24}>

        <Grid item xs={12}>
          <Grid container justify='space-evenly'>
            {
              logos.items.map((item, key) => (
                <Grid
                  className={classes.logo}
                  item
                  key={key}
                  md={1}
                  xs={3}>
                  <Typography
                    align='center'
                    component={Link}
                    to={item.to}
                    style={{
                      textDecoration: 'none'
                    }}>
                    <FontAwesomeIcon
                      color='#0074D9'
                      icon={[ 'fal', item.icon] }
                      size='2x'
                      style={{
                        marginBottom: 20,
                      }} />
                    <Typography>{item.label}</Typography>
                  </Typography>
                </Grid>
              ))
            }
          </Grid>
        </Grid>

    </Grid>;
  };
}

HomeLogos.defaultProps ={};
HomeLogos.propTypes = {};

export default withStyles(styles)(HomeLogos);