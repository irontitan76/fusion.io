import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({});

class CookieNotifier extends Component {
  renderAction = () => {
    const { intl, onClose } = this.props;
    const acceptText = intl.formatMessage({ id: 'cookie.warning.okay' });

    return (
      <Button color='primary' key='accept' onClick={onClose} size='small'>
        {acceptText}
      </Button>
    );
  }

  render() {
    const { intl, open } = this.props;

    const message = intl.formatMessage({ id: 'cookie.warning.message' });

    return (
      <Snackbar
        action={this.renderAction()}
        message={message}
        open={open}
      />
    );
  }
}

CookieNotifier.defaultProps = {
  open: true,
};

CookieNotifier.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  intl: intlShape.isRequired,
  // onAccept: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  // onDecline: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

export default withStyles(styles)(injectIntl(CookieNotifier));