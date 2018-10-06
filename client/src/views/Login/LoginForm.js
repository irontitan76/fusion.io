import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  loginForm: {
    marginBottom: theme.spacing.unit * 8,
    marginTop: theme.spacing.unit * 8,
  },
  loginFormContainer: {},
  loginFormLogo: {
    marginBottom: theme.spacing.unit * 3,
  },
  loginFormPaper: {
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
  },
  loginFormTextField: {
    marginBottom: theme.spacing.unit * 3,
  },
  loginFormTitlePaper: {
    backgroundColor: '#0074D9',
  },
  loginFormTitle: {
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
  },
  loginFormTitleText: {
    color: '#fff',
    letterSpacing: 18,
    fontWeight: 300,
  },
});

class LoginForm extends Component {
  state = {
    isRemembered: false,
    password: '',
    username: '',
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = () => {
    const { password, username } = this.state;

  };

  onSwitchChange = name => event => {
    this.setState({ [name]: event.target.checked });
  }

  render() {
    const { isRemembered, password, username } = this.state;
    const { classes } = this.props;

    return <Grid
      className={classes.loginForm}
      container
      justify='center'>

      <Grid
        className={classes.loginFormContainer}
        item
        md={3}
        sm={6}
        xs={10}>

        <Paper
          className={classes.loginFormTitlePaper}
          elevation={1}>
          <Typography
            align='center'
            className={classes.loginFormTitle}
            component='div'>
            <FontAwesomeIcon
              className={classes.loginFormLogo}
              color='#fff'
              icon={['fal', 'atom']}
              size='6x'
            />
            <Typography
              className={classes.loginFormTitleText}
              variant='title'>
              FUSION
            </Typography>
          </Typography>
        </Paper>

        <Paper
          className={classes.loginFormPaper}
          elevation={1}>
          <form>
            <TextField
              className={classes.loginFormTextField}
              fullWidth
              label='Username'
              name='username'
              onChange={this.onChange}
              value={username}
            />
            <TextField
              className={classes.loginFormTextField}
              fullWidth
              label='Password'
              name='password'
              onChange={this.onChange}
              value={password}
            />
          </form>

          <Typography component='div'>
            <Switch
              checked={isRemembered}
              onChange={this.onSwitchChange('isRemembered')}
            />
            Remember me
          </Typography>

        </Paper>

      </Grid>

    </Grid>;
  }
}

export default withStyles(styles)(LoginForm);