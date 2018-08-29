import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  input: {
    padding: theme.spacing.unit * .75
  },
  search: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    padding: `${theme.spacing.unit * .75}px 0px`
  },
});

export class SearchBar extends Component {
  render() {
    const { classes, ...props } = this.props;
    return (
      <TextField
        className={classes.search}
        fullWidth
        inputProps={{
          className: classes.input
        }}
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position='start'>
              <FontAwesomeIcon
                icon={[ 'far', 'search' ]}
                style={{ color: '#999', paddingLeft: 12 }} />
            </InputAdornment>
          )
        }}
        margin='none'
        {...props} />
    );
  }
}

SearchBar.defaultProps = {};
SearchBar.propTypes = {};

export default withStyles(styles)(SearchBar);