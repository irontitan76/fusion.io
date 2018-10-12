import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import validator from 'validator';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  loginForm: {
    marginBottom: theme.spacing.unit * 8,
    marginTop: theme.spacing.unit * 5,
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    },
  },
  loginFormButton: {
    marginBottom: theme.spacing.unit * 2,
  },
  loginFormContainer: {},
  loginFormLogo: {
    color: 'inherit',
    marginBottom: theme.spacing.unit * 3,
  },
  loginFormInput: {
    color: '#111',
    '&:-webkit-autofill': {
      '-webkit-box-shadow': 'inset 0 0 0px 9999px white'
    }
  },
  loginFormMessage: {
    boxSizing: 'border-box',
    color: theme.palette.red,
    marginBottom: theme.spacing.unit,
    height: 12,
  },
  loginFormPaper: {
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
  },
  loginFormSwitch: {},
  loginFormSwitchContainer: {
    marginBottom: theme.spacing.unit,
  },
  loginFormTextField: {
    marginBottom: theme.spacing.unit * 2,
  },
  loginFormTitlePaper: {
    backgroundColor: '#0074D9',
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
  },
  loginFormTitle: {
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.navy,
    }
  },
  loginFormTitleText: {
    color: 'inherit',
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
    const { onSubmit } = this.props;
    onSubmit(password, username);
  };

  onSwitchChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  validateForm = () => {
    const { password, username } = this.state;
    const isFilledIn = [password, username]
      .every(val => validator.isLength(val, { min: 1 }));
    const isValidEmail = validator.isEmail(username);

    return !(isFilledIn && isValidEmail);
  };

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
        md={4}
        sm={7}
        xs={12}>

        <Paper
          className={classes.loginFormTitlePaper}
          elevation={1}>
          <Typography
            align='center'
            className={classes.loginFormTitle}
            component={Link}
            to='/'>
            <FontAwesomeIcon
              className={classes.loginFormLogo}
              color='#fff'
              icon={['fal', 'atom-alt']}
              size='6x'
            />
            <Typography
              className={classes.loginFormTitleText}
              variant='h6'>
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
              inputProps={{
                className: classes.loginFormInput,
              }}
              label='Username'
              name='username'
              onChange={this.onChange}
              type='text'
              value={username}
            />
            <TextField
              className={classes.loginFormTextField}
              fullWidth
              inputProps={{
                className: classes.loginFormInput,
              }}
              label='Password'
              name='password'
              onChange={this.onChange}
              type='password'
              value={password}
            />
          </form>

          <Grid
            className={classes.loginFormSwitchContainer}
            container
            justify='flex-end'>
            <Typography
              component={Grid}
              item>
              Remember me
              <Switch
                className={classes.loginFormSwitch}
                checked={isRemembered}
                onChange={this.onSwitchChange('isRemembered')}
              />
            </Typography>
          </Grid>

          <Typography
            className={classes.loginFormMessage}
            gutterBottom>
            { this.state.message }
          </Typography>

          <Button
            className={classes.loginFormButton}
            color='primary'
            disabled={this.validateForm()}
            fullWidth
            onClick={this.onSubmit}
            variant='contained'>
            Login
          </Button>

          <Button
            color='default'
            component={Link}
            fullWidth
            to='/signup'
            variant='contained'>
            Sign up
          </Button>

        </Paper>

      </Grid>

    </Grid>;
  }
}

export default withStyles(styles)(LoginForm);