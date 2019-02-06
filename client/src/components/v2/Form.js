import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from 'components/Input';
import Loader from 'components/Loader';

class Form extends Component {
  componentDidCatch = () => {
    return null;
  };

  renderFields = () => {
    const { fields, onBlur, onChange } = this.props;

    if (!fields || fields.length === 0) {
      return <Loader inline />;
    }

    return fields.map((field, key) => (
      <Input
        field={field}
        id={key}
        key={field.name}
        onBlur={onBlur}
        onChange={onChange}
      />
    ));
  };

  render = () => {
    const { children, name, onSubmit } = this.props;

    return (
      <form name={name} onSubmit={onSubmit}>
        {this.renderFields()}
        {children}
      </form>
    );
  };
}

Form.defaultProps = {
  onBlur: () => null,
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;