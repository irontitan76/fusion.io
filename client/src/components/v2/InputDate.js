import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DatePicker } from 'material-ui-pickers';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  date: {
    '& div:first-child': {
      width: '100%',
    },
    height: 68,
    marginBottom: theme.spacing.unit * 2,
  },
  dateBase: {
    color: '#111 !important',
  },
});

class InputDate extends Component {
  componentDidCatch = () => {
    return null;
  };

  render = () => {
    const { base, classes, field, onBlur, onChange } = this.props;

    const dateProps = {
      className: classes.date,
      format: 'YYYY-MM-DD',
      InputProps: {
        ...field.InputProps,
        className: classes.dateBase,
      },
      keyboard: true,
      keyboardIcon: <CalendarIcon />,
      onBlur,
      onChange: date => onChange({ target: { name: field.name, value: date } }),
    };

    return <DatePicker {...base} {...dateProps} />;
  };
}

InputDate.defaultProps = {
  onBlur: () => null,
};

InputDate.propTypes = {
  base: PropTypes.shape({}).isRequired,
  classes: PropTypes.shape({}).isRequired,
  field: PropTypes.shape({}).isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(InputDate);