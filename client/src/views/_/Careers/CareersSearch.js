import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { injectIntl } from 'react-intl';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';

import {
  searchCareers,
} from 'actions/careers';

const styles = theme => ({
  search: {
    zIndex: 0,
  },
  searchBar: {
    border: 'none',
    outline: 'none',
  },
  searchCancelIcon: {
    fontSize: 12,
  },
  searchField: {
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.lightgray}`,
    padding: `${theme.spacing.unit * .75}px 0px`,
  },
  searchIcon: {
    color: theme.palette.gray,
    paddingLeft: 12,
  },
  searchInput: {
    padding: theme.spacing.unit * .75,
  },
});

class CareersSearch extends Component {
  renderEndAdornment = () => {
    const { classes, dispatch, value } = this.props;

    if (value === '') return null;

    return (
      <IconButton
        aria-label='Cancel search'
        onClick={() => dispatch(searchCareers(null, false, false))}
      >
        <FontAwesomeIcon
          className={classes.searchCancelIcon}
          icon={['fal', 'times']}
        />
      </IconButton>
    );
  };

  renderStartAdornment = () => {
    const { classes } = this.props;

    return (
      <InputAdornment position='start'>
        <FontAwesomeIcon
          className={classes.searchIcon}
          icon={['fal', 'search']}
        />
      </InputAdornment>
    );
  };

  render() {
    const { classes, dispatch, intl, onSearch } = this.props;
    const label = intl.formatMessage({ id: 'careers.search.placeholder' });

    return (
      <AppBar className={classes.search} position='static'>
        <Toolbar className={classes.searchBar}>

          <Grid container justify='center'>
            <Grid item xl={3} md={5} xs={12}>
              <TextField
                classes={{ root: classes.searchField }}
                fullWidth
                inputProps={{  'aria-label': label,  className: classes.searchInput }}
                InputProps={{
                  disableUnderline: true,
                  endAdornment: this.renderEndAdornment(),
                  startAdornment: this.renderStartAdornment(),
                }}
                margin='none'
                placeholder={label}
                onChange={onSearch}
                onFocus={() => dispatch(searchCareers(null, false, true))}
              />
            </Grid>
          </Grid>

        </Toolbar>
      </AppBar>
    );
  }
}

CareersSearch.defaultProps = {
  value: '',
};

CareersSearch.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.shape({}).isRequired,
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default withStyles(styles)(injectIntl(CareersSearch));