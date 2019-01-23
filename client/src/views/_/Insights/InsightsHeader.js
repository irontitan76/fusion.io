import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { injectIntl } from 'react-intl';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import {
  filterInsights,
} from 'actions/insights';

const styles = theme => ({
  header: {
    marginBottom: theme.spacing.unit * 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
    },
  },
  headerBar: {
    backgroundColor: theme.palette.blue,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
  headerPeriod: {
    color: theme.palette.dark,
    fontSize: 40,
    lineHeight: .4,
  },
  headerSearchField: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    border: '1px solid #ddd',
    padding: `${theme.spacing.unit * .75}px 0px`,
  },
  headerSearchIcon: {
    color: theme.palette.common.white,
    paddingLeft: 12,
  },
  headerSearchInput: {
    '&::placeholder': {
      color: theme.palette.common.white,
      fontWeight: 300,
    },
    color: theme.palette.common.white,
    padding: theme.spacing.unit * .75,
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
    color: theme.palette.common.white,
    fontWeight: 300,
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

    if (value.length === 0) {
      filter = null;
    } else if (value.indexOf(':') < 0) {
      filter = value;
    }

    dispatch(filterInsights(filter));
  };

  render() {
    const { classes, history, intl } = this.props;

    const searchIcon = (
      <InputAdornment position='start'>
        <FontAwesomeIcon className={classes.headerSearchIcon} icon={['fal', 'search']} />
      </InputAdornment>
    );

    return (
      <AppBar className={classes.header} position='sticky' elevation={0}>
        <Toolbar className={classes.headerBar}>
          <Grid alignItems='center' container justify='space-between'>
            <Grid item md={9} xs={12}>
              <Typography
                className={classes.headerTitle}
                component={Link}
                to='/insights'
                variant='h6'
              >
                <span className={classes.headerTitleSpan}>insights</span>
                <span className={classes.headerPeriod}>.</span>
                <span className={classes.headerTitleSpan}>engine</span>
              </Typography>
            </Grid>

            <TextField
              className={classes.headerSearchField}
              component={Grid}
              fullWidth
              inputProps={{
                'aria-label': intl.formatMessage({ id: 'insights.search.placeholder' }),
                className: classes.headerSearchInput,
                onKeyPress: (event) => {
                  if (event.key !== 'Enter') {
                    return null;
                  }
                  return history.push('/insights');
                },
              }}
              InputProps={{ disableUnderline: true, startAdornment: searchIcon }}
              item
              margin='none'
              md={3}
              onChange={this.onChange}
              placeholder={intl.formatMessage({ id: 'insights.search.placeholder' })}
              xs={12}
            />
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

InsightsHeader.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  intl: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(injectIntl(InsightsHeader));