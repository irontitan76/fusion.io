import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

import Button from '@material-ui/core/Button';
import MuiDialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogContentText from '@material-ui/core/DialogContentText';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
  container: {},
  content: {},
  contentText: {},
  title: {},
});

class Dialog extends Component {
  renderActions = () => {
    const { acceptText, declineText, intl, onAccept, onDecline } = this.props;

    const accept = acceptText && onAccept ? (
      <Button color='primary' onClick={onAccept}>
        {intl.formatMessage({ id: acceptText })}
      </Button>
    ) : null;

    const decline = declineText && onDecline ? (
      <Button color='secondary' onClick={onDecline}>
        {intl.formatMessage({ id: declineText })}
      </Button>
    ) : null;

    return (
      <MuiDialogActions>
        {accept}
        {decline}
      </MuiDialogActions>
    );
  };

  renderContent = () => {
    const { classes, intl, message } = this.props;

    return (
      <MuiDialogContent className={classes.content}>
        <MuiDialogContentText className={classes.contentText}>
          {intl.formatMessage({ id: message })}
        </MuiDialogContentText>
      </MuiDialogContent>
    );
  };

  renderTitle = () => {
    const { classes, intl, title } = this.props;

    return (
      <MuiDialogTitle
        className={classes.title}
        id='dialog-title'
      >
        {intl.formatMessage({ id: title })}
      </MuiDialogTitle>
    );
  };

  render() {
    const { classes, open } = this.props;

    return (
      <MuiDialog className={classes.container} open={open}>
        {this.renderTitle()}
        {this.renderContent()}
        {this.renderActions()}
      </MuiDialog>
    );
  }
}

Dialog.defaultProps = {
  acceptText: 'Accept',
  declineText: 'Decline',
  message: ' ',
  onDecline: () => null,
  open: false,
};

Dialog.propTypes = {
  acceptText: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  declineText: PropTypes.string,
  intl: intlShape.isRequired,
  message: PropTypes.string,
  onAccept: PropTypes.func.isRequired,
  onDecline: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(injectIntl(Dialog));