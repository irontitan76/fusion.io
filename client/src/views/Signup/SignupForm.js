import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import withRouter from 'react-router-dom/withRouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import validator from 'validator';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { signup } from 'api/session';

const styles = theme => ({
  signupForm: {
    backgroundColor: theme.palette.background.default,
    paddingBottom: theme.spacing.unit * 8,
    paddingTop: theme.spacing.unit * 5,
    [theme.breakpoints.up('xl')]: {
      paddingTop: theme.spacing.unit * 20,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 0,
    },
  },
  signupFormButton: {
    marginBottom: theme.spacing.unit * 2,
  },
  signupFormContainer: {},
  signupFormInput: {
    '&:-webkit-autofill': {
      '-webkit-box-shadow': `inset 0 0 0px 9999px ${theme.palette.background.paper}`,
      '-webkit-text-fill-color': theme.palette.text.primary,
    },
    color: '#111',
  },
  signupFormLogo: {
    color: 'inherit',
    marginBottom: theme.spacing.unit * 3,
  },
  signupFormMessage: {
    boxSizing: 'border-box',
    color: theme.palette.red,
    height: 12,
    marginBottom: theme.spacing.unit * 3,
  },
  signupFormPaper: {
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
  },
  signupFormSwitch: {},
  signupFormSwitchContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  signupFormTextField: {
    marginBottom: theme.spacing.unit * 3,
  },
  signupFormTitle: {
    '&:hover': {
      color: theme.palette.navy,
    },
    color: theme.palette.common.white,
    textDecoration: 'none',
  },
  signupFormTitlePaper: {
    backgroundColor: theme.palette.primary.main,
    paddingBottom: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 5,
  },
  signupFormTitleText: {
    color: 'inherit',
    fontWeight: 300,
    letterSpacing: 18,
  },
});

class SignupForm extends Component {
  state = {
    fields: {
      firstName: { error: false, label: 'First name', message: '', type: 'text', value: '' },
      lastName: { error: false, label: 'Last name', message: '', type: 'text', value: '' },
      password: { error: false, label: 'Password', message: '',  type: 'password', value: '' },
      passwordConfirmation: {
        error: false,
        label: 'Confirm Password',
        message: '',
        type: 'password',
        value: '',
      },
      username: { error: false, label: 'Username', message: '', type: 'email', value: '' },
    },
  };

  onChange = event => {
    this.setState(state => ({
      ...state,
      fields: {
        ...state.fields,
        [event.target.name]: {
          ...state.fields[event.target.name],
          value: event.target.value,
        },
      },

    }));
  };

  onSubmit = async () => {
    const { fields } = this.state;
    const { history } = this.props;

    if (this.validatePassword()) {
      const response = await signup(fields);

      if (response.status !== 200) {
        this.setState({
          message: response.data.error,
        });
      }
      response.status === 200 && history.push('/login');
    } else {
      this.setState(state => ({
        fields: {
          ...state.fields,
          passwordConfirmation: {
            ...state.fields.passwordConfirmation,
            error: true,
            message: 'Passwords do not match',
          },
        },
      }));
    }
  };

  validatePassword = () => {
    const { fields } = this.state;
    if (fields.password.value !== fields.passwordConfirmation.value) return false;
    return true;
  };

  validateForm = () => {
    const { fields } = this.state;
    const isFilledIn = Object.keys(fields)
      .map(field => fields[field].value)
      .every(val => validator.isLength(val, { min: 1 }));
    const isPasswordConfirmed = validator.equals(
      fields.password.value,
      fields.passwordConfirmation.value
    );
    const isValidEmail = validator.isEmail(fields.username.value);

    return !(isFilledIn && isPasswordConfirmed && isValidEmail);
  }

  render() {
    const { fields, message } = this.state;
    const { classes } = this.props;

    return (
      <Grid
        className={classes.signupForm}
        container
        justify='center'
      >

        <Grid
          className={classes.signupFormContainer}
          item
          md={4}
          sm={7}
          xl={3}
          xs={12}
        >

          <Paper
            className={classes.signupFormTitlePaper}
            elevation={1}
          >
            <Typography
              align='center'
              className={classes.signupFormTitle}
              component={Link}
              to='/'
            >
              <FontAwesomeIcon
                className={classes.signupFormLogo}
                color='#fff'
                icon={['fal', 'atom-alt']}
                size='6x'
              />
              <Typography
                className={classes.signupFormTitleText}
                variant='h6'
              >
              FUSION
              </Typography>
            </Typography>
          </Paper>

          <Paper
            className={classes.signupFormPaper}
            elevation={1}
          >
            <form>
              {
                Object.keys(fields).map((field) => {
                  return (
                    <TextField
                      className={classes.signupFormTextField}
                      error={fields[field].error}
                      fullWidth
                      helperText={fields[field].message}
                      inputProps={{
                        'aria-label': fields[field].label,
                        className: classes.signupFormInput,
                      }}
                      key={fields[field].label}
                      label={fields[field].label}
                      name={field}
                      onChange={this.onChange}
                      required
                      type={fields[field].type}
                      value={fields[field].value}
                    />
                  );
                })
              }
            </form>

            <Typography
              className={classes.signupFormMessage}
              gutterBottom
            >
              {message}
            </Typography>

            <Button
              className={classes.signupFormButton}
              color='primary'
              disabled={this.validateForm()}
              fullWidth
              onClick={this.onSubmit}
              variant='contained'
            >
            Sign up
            </Button>

            <Button
              color='default'
              component={Link}
              fullWidth
              to='/login'
              variant='contained'
            >
            Go to Login
            </Button>

          </Paper>

        </Grid>

      </Grid>
    );
  }
}

SignupForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(withStyles(styles)(SignupForm));