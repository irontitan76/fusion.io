import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { header } from './insights';

const styles = theme => ({
  header: {
    borderBottom: '1px solid #ccc',
    boxShadow: 'none',
    marginBottom: theme.spacing.unit * 5,
  },
  headerBar: {
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
  headerTitle: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
    },
  },
  headerTitleSpan: {
    fontWeight: 500,
  },
  headerPeriod: {
    color: '#0074D9',
    fontSize: 40,
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
  render() {
    const { classes } = this.props;

    return <AppBar className={classes.header} position='sticky'>
      <Toolbar className={classes.headerBar}>
        <Grid container justify='space-between'>
          <Grid item md={9} xs={12}>
            <Typography
              className={classes.headerTitle}
              variant='title'>
              <span className={classes.headerTitleSpan}>insights</span>
              <span className={classes.headerPeriod}>.</span>
              <span className={classes.headerTitleSpan}>engine</span>
            </Typography>
          </Grid>

          <Grid item md={3} xs={12}>
            <TextField
              className={classes.headerSearchField}
              fullWidth
              inputProps={{
                className: classes.headerSearchInput
              }}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position='start'>
                    <FontAwesomeIcon
                      className={classes.headerSearchIcon}
                      icon={[ 'far', 'search' ]} />
                  </InputAdornment>
                )
              }}
              margin='none'
              placeholder={ header.search.placeholder }
             />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>;
  };
}

export default withStyles(styles)(InsightsHeader);