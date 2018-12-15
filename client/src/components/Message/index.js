import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';

import Snackbar from '@material-ui/core/Snackbar';

import { unloadMessage } from 'actions/messages';

class Message extends Component {
  removeMessage = (event, reason) => {
    const { dispatch } = this.props;

    if (reason === 'clickaway') {
      return;
    }

    dispatch(unloadMessage());
  };

  render = () => {
    const { message, ...props } = this.props;

    return <Snackbar
      message={message.content}
      onClose={this.removeMessage}
      open={message.open}
      {...omit(props, ['dispatch'])} />;
  };
}

Message.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  autoHideDuration: 6000,
};

Message.propTypes = {
  anchorOrigin: PropTypes.object.isRequired,
  autoHideDuration: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired,
};

const select = state => ({
  message: state.messages,
});

export default connect(select)(Message);