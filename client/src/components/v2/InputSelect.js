import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class InputSelect extends Component {
  componentDidCatch = () => {
    return null;
  };

  renderOptions = () => {
    const { field, onChange } = this.props;
    const { options } = field;

    if (options.length === 0) return [];

    return options.map((option) => {
      let checkbox = null;

      if (field.multi) {
        checkbox = (
          <Checkbox
            checked={field.value.indexOf(option.value) > -1}
          />
        );
      }

      return (
        <MenuItem key={option.value} onClick={onChange} value={option.value}>
          { checkbox }
          <ListItemText primary={option.label} />
        </MenuItem>
      );
    });
  };

  render = () => {
    const { base, field, onBlur, onChange } = this.props;

    let selectProps = {};

    if (field.multi) {
      selectProps = {
        children: this.renderOptions(),
        onBlur: () => onBlur({
          target: { name: field.name, value: field.value },
        }),
        onChange: event => onChange({
          target: { name: field.name, value: event.target.value },
        }),
        select: true,
        SelectProps: {
          multiple: true,
          renderValue: selected => selected.join(', '),
        },
      };
    } else {
      selectProps = {
        children: this.renderOptions(),
        onBlur: () => onBlur({
          target: { name: field.name, value: field.value },
        }),
        onChange: event => onChange({
          target: { name: field.name, value: event.target.value },
        }),
        select: true,
      };
    }

    return <TextField {...base} {...selectProps} />;
  };
}

InputSelect.defaultProps = {
  onBlur: () => null,
};

InputSelect.propTypes = {
  base: PropTypes.shape({}).isRequired,
  field: PropTypes.shape({}).isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
};

export default InputSelect;