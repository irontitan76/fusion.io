import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

class InputText extends Component {
  componentDidCatch = () => {
    return null;
  };

  render = () => {
    const { base, field, onBlur, onChange } = this.props;

    const textProps = {
      multiline: !!field.multiline,
      onBlur,
      onChange,
      rowsMax: field.multiline,
    };

    return <TextField {...base} {...textProps} />;
  };
}

InputText.defaultProps = {
  onBlur: () => null,
};

InputText.propTypes = {
  base: PropTypes.shape({}).isRequired,
  field: PropTypes.shape({}).isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
};

export default InputText;