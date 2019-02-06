import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class InputPassword extends Component {
  state = {
    isPasswordVisible: false,
  };

  /**
   * @method _mouseDownVisibility
   * @description Prevents adverse behavior for button clicks, e.g., password
   *  visibility icons specifically for Safari browsers
   */
  _mouseDownVisibility = event => {
    return event.preventDefault();
  };

  /**
   * @method _togglePasswordVisibility
   * @description Called when the show password icon is clicked for inputs
   *  with type 'password'. The state change subsequently toggles the input
   *  between type 'text' and 'password'
   */
  _togglePasswordVisibility = () => {
    this.setState(state => ({ isPasswordVisible: !state.isPasswordVisible }));
  };

  componentDidCatch = () => {
    return null;
  };

  render = () => {
    const { isPasswordVisible } = this.state;
    const { base, field, onBlur, onChange } = this.props;

    const modifiedInputProps = {
      ...base.inputProps,
      autoComplete: field.autocomplete || undefined,
    };

    const passwordProps = {
      InputLabelProps: {
        shrink: field.shrink,
      },
      inputProps: modifiedInputProps,
      InputProps: {
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton
              aria-label='Toggle password visibility'
              onClick={this._togglePasswordVisibility}
              onMouseDown={this._mouseDownVisibility}
            >
              {
                isPasswordVisible
                  ? <VisibilityOff />
                  : <Visibility />
              }
            </IconButton>
          </InputAdornment>
        ),
      },
      onBlur,
      onChange,
      type: isPasswordVisible ? 'text' : field.type,
    };

    return (
      <TextField
        {...base}
        {...passwordProps}
      />
    );
  };
}

InputPassword.defaultProps = {
  onBlur: () => null,
};

InputPassword.propTypes = {
  base: PropTypes.shape({}).isRequired,
  field: PropTypes.shape({}).isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
};

export default InputPassword;