import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import ChatIcon from '@material-ui/icons/Chat';
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import SendIcon from '@material-ui/icons/Send';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  agent: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    float: 'right',
  },
  anchorBottomLeft: {
    bottom: theme.spacing.unit * 3,
    left: theme.spacing.unit * 4,
  },
  anchorBottomLeftHorizontalToolbar: {
    bottom: theme.spacing.unit * 3,
    left: theme.spacing.unit * 10,
  },
  anchorBottomLeftVerticalToolbar: {
    bottom: theme.spacing.unit * 10,
    left: theme.spacing.unit * 4,
  },
  anchorBottomRight: {
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 4,
  },
  anchorBottomRightHorizontalToolbar: {
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 10,
  },
  anchorBottomRightVerticalToolbar: {
    bottom: theme.spacing.unit * 10,
    right: theme.spacing.unit * 4,
  },
  anchorTopLeft: {
    left: theme.spacing.unit * 4,
    top: theme.spacing.unit * 3,
  },
  anchorTopLeftHoriztonalToolbar: {
    left: theme.spacing.unit * 10,
    top: theme.spacing.unit * 3,
  },
  anchorTopLeftVerticalToolbar: {
    left: theme.spacing.unit * 4,
    top: theme.spacing.unit * 10,
  },
  anchorTopRight: {
    right: theme.spacing.unit * 4,
    top: theme.spacing.unit * 3,
  },
  anchorTopRightHorizontalToolbar: {
    right: theme.spacing.unit * 10,
    top: theme.spacing.unit * 3,
  },
  anchorTopRightVerticalToolbar: {
    right: theme.spacing.unit * 4,
    top: theme.spacing.unit * 10,
  },
  chatArea: {
    height: '100%',
  },
  chatButton: {},
  chatTitle: {
    flexGrow: 1,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit,
  },
  chatToolbar: {
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
  closeButton: {
    height: 20,
    paddingBottom: theme.spacing.unit * 3,
  },
  container: {
    height: 400,
    overflowY: 'hidden',
    position: 'fixed',
    width: 350,
    [theme.breakpoints.up('md')]: {
      height: 500,
      width: 450,
    },
  },
  fabIcon: {
    position: 'fixed',
  },
  input: {
    backgroundColor: theme.palette.background.default,
    borderTop: `1px solid ${theme.palette.primary.main}`,
    bottom: 0,
    height: 40,
    left: 0,
    overflowY: 'hidden',
    position: 'absolute',
    width: '100%',
  },
  inputBase: {
    '&:focus': {},
    boxSizing: 'border-box',
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  isToolbar: theme.mixins.toolbar,
  message: {
    '&:after': {
      clear: 'both',
      content: '',
    },
    borderRadius: '10%',
    marginBottom: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * .5,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingTop: theme.spacing.unit * .5,
    width: '60%',
    wordWrap: 'break-word',
  },
  moveDown: {
    transform: 'translate3d(0, 64px, 0)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
  },
  moveLeft: {
    transform: 'translate3d(-64px, 0, 0)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
  },
  moveRight: {
    transform: 'translate3d(64px, 0, 0)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeOut,
    }),
  },
  moveUp: {
    transform: 'translate3d(0, -64px, 0)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeOut,
    }),
  },
  paper: {
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'scroll',
    padding: theme.spacing.unit,
    zIndex: theme.zIndex.tooltip + 1,
  },
  user: {
    backgroundColor: '#eee',
    float: 'left',
  },
});

class ChatBox extends Component {
  state = {
    currentMessage: '',
    isChatOpen: false,
    messages: [],
  };

  onChange = () => {
    const { value } = event.target;
    this.setState({ currentMessage: value });
  };

  onClick = () => {
    this.setState((state) => ({ isChatOpen: !state.isChatOpen }));
  };

  onSubmit = () => {
    event.preventDefault();

    const { currentMessage, messages } = this.state;
    const message = {
      _createdAt: new Date(),
      agent: messages.length % 2 === 0,
      author: 'test', body: currentMessage,
    };
    this.setState((state) => ({ currentMessage: '', messages: [...state.messages, message] }));
  };

  renderMessages = () => {
    const { messages } = this.state;
    const { classes } = this.props;

    const renderedMessages = messages.map((message) => {
      return (
        <Typography
          className={`${classes.message} ${message.agent ? classes.agent : classes.user}`}
          component={Grid}
          container
          key={message._createdAt.toISOString()}
        >
          {message.body}
        </Typography>
      );
    });

    return (
      <div className={classes.chatArea}>
        {renderedMessages}
      </div>
    );
  };

  renderTextArea = () => {
    const { currentMessage } = this.state;
    const { classes } = this.props;

    const endAdornment = (
      <IconButton onClick={this.onSubmit}>
        <SendIcon />
      </IconButton>
    );

    return (
      <Input
        className={classes.input}
        disableUnderline
        endAdornment={endAdornment}
        inputProps={{ className: classes.inputBase }}
        multiline
        onChange={this.onChange}
        placeholder='Type your message...'
        type='textarea'
        value={currentMessage}
      />
    );
  };

  renderTitle = () => {
    const { classes, title } = this.props;

    return (
      <Toolbar className={classes.chatToolbar} disableGutters variant='dense'>
        <Typography className={classes.chatTitle} variant='subtitle1'>{title}</Typography>
        <Button className={classes.chatButton} color='inherit' onClick={this.onClick}>
          <CloseIcon />
        </Button>
      </Toolbar>
    );
  };

  render() {
    const { isChatOpen } = this.state;
    const { anchor, classes, move, toolbar } = this.props;

    const isSpacing = toolbar ? toolbar.charAt(0).toUpperCase() + toolbar.substring(1) : false;
    const anchorPosition = classes[`anchor${anchor}${toolbar ? `${isSpacing}Toolbar` : ''}`];
    const isMoved = move ? classes[`move${move}`] : '';

    return (
      <>
        <Fade in={!isChatOpen} timeout={!isChatOpen ? 1000 : 200}>
          <Fab
            aria-label='Chat'
            className={`${classes.fabIcon} ${anchorPosition} ${isMoved}`}
            color='secondary'
            onClick={this.onClick}
          >
            <ChatIcon />
          </Fab>
        </Fade>
        <Grow in={isChatOpen} timeout={600}>
          <Paper
            className={`${classes.container} ${anchorPosition} ${isMoved}`}
            elevation={12}
            square
          >
            {this.renderTitle()}
            <Paper className={classes.paper} elevation={12}>
              {this.renderMessages()}
            </Paper>
            {this.renderTextArea()}
          </Paper>
        </Grow>
      </>
    );
  }
}

ChatBox.defaultProps = {
  anchor: 'BottomRight',
  move: 'Up',
  title: 'Welcome to Chat',
  toolbar: 'horizontal',
};

ChatBox.propTypes = {
  anchor: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  /*
   * messages: PropTypes.arrayOf(PropTypes.shape({
   *  _createdAt: PropTypes.string.isRequired,
   * author: PropTypes.string.isRequired,
   * body: PropTypes.string.isRequired,
   * })).isRequired,
   */
  move: PropTypes.oneOf(['Down', 'Left', 'Right', 'Up']),
  title: PropTypes.string,
  toolbar: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default withStyles(styles)(ChatBox);