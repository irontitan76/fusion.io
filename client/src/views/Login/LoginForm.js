import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import validator from 'validator';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  loginForm: {
    paddingBottom: theme.spacing.unit * 8,
    paddingTop: theme.spacing.unit * 5,
    [theme.breakpoints.up('xl')]: {
      paddingTop: theme.spacing.unit * 20,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 0,
    },
  },
  loginFormButton: {
    marginBottom: theme.spacing.unit * 2,
  },
  loginFormContainer: {},
  loginFormInput: {
    '&:-webkit-autofill': {
      '-webkit-box-shadow': 'inset 0 0 0px 9999px white',
    },
    color: '#111',
  },
  loginFormLogo: {
    color: 'inherit',
    marginBottom: theme.spacing.unit * 3,
  },
  loginFormMessage: {
    boxSizing: 'border-box',
    color: theme.palette.red,
    height: 12,
    marginBottom: theme.spacing.unit,
  },
  loginFormPaper: {
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
  },
  loginFormTextField: {
    marginBottom: theme.spacing.unit * 2,
  },
  loginFormTitle: {
    '&:hover': {
      color: theme.palette.navy,
    },
    color: '#fff',
    textDecoration: 'none',
  },
  loginFormTitlePaper: {
    backgroundColor: '#0074D9',
    paddingBottom: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 5,
  },
  loginFormTitleText: {
    color: 'inherit',
    fontWeight: 300,
    letterSpacing: 18,
  },
});

class LoginForm extends Component {
  state = {
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

  validateForm = () => {
    const { password, username } = this.state;
    const isFilledIn = [password, username]
      .every(val => validator.isLength(val, { min: 1 }));
    const isValidEmail = validator.isEmail(username);

    return !(isFilledIn && isValidEmail);
  };

  render() {
    const { message, password, username } = this.state;
    const { classes } = this.props;

    return (
      <Grid
        className={classes.loginForm}
        container
        justify='center'
      >

        <Grid
          className={classes.loginFormContainer}
          item
          md={4}
          sm={7}
          xl={3}
          xs={12}
        >

          <Paper
            className={classes.loginFormTitlePaper}
            elevation={1}
          >
            <Typography
              align='center'
              className={classes.loginFormTitle}
              component={Link}
              to='/'
            >
              <FontAwesomeIcon
                className={classes.loginFormLogo}
                color='#fff'
                icon={['fal', 'atom-alt']}
                size='6x'
              />
              <Typography
                className={classes.loginFormTitleText}
                variant='h6'
              >
              FUSION
              </Typography>
            </Typography>
          </Paper>

          <Paper
            className={classes.loginFormPaper}
            elevation={1}
          >
            <form>
              <TextField
                className={classes.loginFormTextField}
                fullWidth
                inputProps={{
                  'aria-label': 'username',
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
                  'aria-label': 'password',
                  className: classes.loginFormInput,
                }}
                label='Password'
                name='password'
                onChange={this.onChange}
                type='password'
                value={password}
              />
            </form>

            <Typography
              className={classes.loginFormMessage}
              gutterBottom
            >
              {message}
            </Typography>

            <Button
              className={classes.loginFormButton}
              color='primary'
              disabled={this.validateForm()}
              fullWidth
              onClick={this.onSubmit}
              variant='contained'
            >
            Login
            </Button>

            <Button
              color='default'
              component={Link}
              fullWidth
              to='/signup'
              variant='contained'
            >
            Sign up
            </Button>

          </Paper>

        </Grid>

      </Grid>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(LoginForm);