import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { filterInsights } from 'actions/insights';

const styles = theme => ({
  header: {
    borderBottom: '1px solid #ccc',
    boxShadow: 'none',
    marginBottom: theme.spacing.unit * 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
    },
  },
  headerBar: {
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
  headerTitle: {
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      paddingTop: theme.spacing.unit * 2,
      textAlign: 'center',
    },
  },
  headerTitleSpan: {
    fontWeight: 500,
  },
  headerPeriod: {
    color: '#0074D9',
    fontSize: 40,
    lineHeight: .4,
  },
  headerSearchField: {
    border: '1px solid #ddd',
    padding: `${theme.spacing.unit * .75}px 0px`,
  },
  headerSearchIcon: {
    color: theme.palette.gray,
    paddingLeft: 12,
  },
  headerSearchInput: {
    padding: theme.spacing.unit * .75,
  },
});

class InsightsHeader extends Component {
  onChange = event => {
    const { dispatch } = this.props;
    const { value } = event.target;

    let filter = {};

    const search = value.trim().split(',');
    search.forEach(item => {
      const key = item.split(':')[0];
      const value = item.split(':')[1];
      filter[key] = value;
    });

    if ( value.length === 0 ) {
      filter = null;
    } else if ( value.indexOf(':') < 0 ) {
      filter = value;
    }

    dispatch(filterInsights(filter));
  };

  render() {
    const { classes } = this.props;

    const searchIcon = <InputAdornment position='start'>
      <FontAwesomeIcon
        className={classes.headerSearchIcon}
        icon={[ 'fal', 'search' ]} />
    </InputAdornment>;

    return <AppBar className={classes.header} position='sticky'>
      <Toolbar className={classes.headerBar}>
        <Grid alignItems='center' container justify='space-between'>
          <Grid item md={9} xs={12}>
            <Typography
              className={classes.headerTitle}
              component={Link}
              to='/insights'
              variant='h6'>
              <span className={classes.headerTitleSpan}>insights</span>
              <span className={classes.headerPeriod}>.</span>
              <span className={classes.headerTitleSpan}>engine</span>
            </Typography>
          </Grid>

          <TextField
            className={classes.headerSearchField}
            component={Grid}
            fullWidth
            inputProps={{ className: classes.headerSearchInput }}
            InputProps={{ disableUnderline: true, startAdornment: searchIcon }}
            item
            margin='none'
            md={3}
            onChange={this.onChange}
            placeholder='Search insights...'
            xs={12} />
        </Grid>
      </Toolbar>
    </AppBar>;
  };
}

const select = state => ({
  insights: state.insights,
});

export default withStyles(styles)(connect(select)(InsightsHeader));