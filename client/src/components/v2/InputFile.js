import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

class InputFile extends Component {
  componentDidCatch = () => {
    return null;
  };

  render = () => {
    const { base, field, onBlur, onChange } = this.props;

    const fileProps = {
      InputLabelProps: { shrink: true },
      inputProps: { accept: '.csv',  name: field.name },
      onBlur,
      onChange,
    };

    return <TextField {...base} {...fileProps} />;
  };
}

InputFile.defaultProps = {
  onBlur: PropTypes.func.isRequired,
};

InputFile.propTypes = {
  base: PropTypes.shape({}).isRequired,
  field: PropTypes.shape({}).isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
};

export default InputFile;