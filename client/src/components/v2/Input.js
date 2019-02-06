import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import InputDate from './InputDate';
import InputFile from './InputFile';
import InputPassword from './InputPassword';
import InputSelect from './InputSelect';
import InputText from './InputText';

const styles = theme => ({
  input: {
    marginBottom: theme.spacing.unit * 2,
    minHeight: 50,
  },
  inputBase: {
    '&:-webkit-autofill': {
      transition: 'background-color 5000s ease-in-out 0s',
    },
    color: '#111',
  },
});

class Input extends Component {
  componentDidCatch = () => {
    return null;
  };

  render = () => {
    const { classes, disabled, field, id, onBlur, onChange, ...props } = this.props;

    const baseProps = {
      'aria-label': field.name,
      autoFocus: id === 0,
      className: classes.input,
      disabled: disabled || field.disabled,
      error: !!field.error,
      fullWidth: true,
      helperText: field.error || field.helperText,
      inputProps: {
        'aria-label': field.name,
        className: classes.inputBase,
        name: field.name,
      },
      label: field.label,
      name: field.name,
      placeholder: field.placeholder,
      required: field.required,
      type: field.type || field.value && 'text',
      value: field.value,
      ...props,
    };

    switch (field.type) {
    case 'email':
    case 'text':
      return (
        <InputText
          base={baseProps}
          field={field}
          onBlur={onBlur}
          onChange={onChange}
        />
      );
    case 'select':
      return (
        <InputSelect
          base={baseProps}
          field={field}
          onBlur={onBlur}
          onChange={onChange}
        />
      );
    case 'date':
      return (
        <InputDate
          base={baseProps}
          field={field}
          onBlur={onBlur}
          onChange={onChange}
        />
      );
    case 'file':
      return (
        <InputFile
          base={baseProps}
          field={field}
          onBlur={onBlur}
          onChange={onChange}
        />
      );
    case 'password':
      return (
        <InputPassword
          base={baseProps}
          field={field}
          onBlur={onBlur}
          onChange={onChange}
        />
      );
    default:
      return null;
    }
  };
}

Input.defaultProps = {
  disabled: false,
  onBlur: () => null,
};

Input.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  disabled: PropTypes.bool,
  field: PropTypes.shape({}).isRequired,
  id: PropTypes.number.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(Input);