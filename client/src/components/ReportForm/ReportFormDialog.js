import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ReportFormDialog extends Component {
  state = { open: false };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { cancelButton, onCancel } = this.props;

    return (
      <>
        <Button
          fullWidth
          onClick={this.handleOpen}
          style={{ borderColor: 'red', color: 'red' }}
          variant='outlined'
        >
          {cancelButton}
        </Button>
        <Dialog
          aria-labelledby={cancelButton}
          onClose={this.handleClose}
          open={open}
        >
          <DialogTitle id={cancelButton}>{cancelButton}</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              Are you certain you want to delete this item? This will unpublish
              the item and remove it from production.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color='primary' onClick={this.handleClose}>No</Button>
            <Button autoFocus color='primary' onClick={onCancel}>Yes</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

ReportFormDialog.propTypes = {
  cancelButton: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ReportFormDialog;