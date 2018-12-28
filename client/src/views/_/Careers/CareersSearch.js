import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  search: {
    backgroundColor: theme.palette.blue,
    zIndex: 0,
  },
  searchBar: {
    border: 'none',
    outline: 'none',
  },
  searchField: {
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.lightgray}`,
    padding: `${theme.spacing.unit * .75}px 0px`
  },
  searchIcon: {
    color: theme.palette.gray,
    paddingLeft: 12
  },
  searchInput: {
    padding: theme.spacing.unit * .75
  },
});

class CareersSearch extends Component {
  render() {
    const { classes, onSearch } = this.props;

    const icon = <InputAdornment position='start'>
      <FontAwesomeIcon
        className={classes.searchIcon}
        icon={[ 'fal', 'search' ]} />
    </InputAdornment>;

    return <AppBar className={classes.search} position='static'>
      <Toolbar className={classes.searchBar}>

        <Grid container justify='center'>
          <Grid item xl={3} md={5} xs={12}>
            <TextField
              className={classes.searchField}
              fullWidth
              inputProps={{ className: classes.searchInput }}
              InputProps={{ disableUnderline: true, startAdornment: icon }}
              margin='none'
              onChange={onSearch}
              placeholder='Search jobs...' />
          </Grid>
        </Grid>

      </Toolbar>
    </AppBar>;
  }
}

export default withStyles(styles)(CareersSearch);