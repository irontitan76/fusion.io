import React, { Component } from 'react';
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
    marginBottom: theme.spacing.unit * 8,
    marginTop: theme.spacing.unit * 5,
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    },
  },
  signupFormButton: {
    marginBottom: theme.spacing.unit * 2,
  },
  signupFormContainer: {},
  signupFormLogo: {
    color: 'inherit',
    marginBottom: theme.spacing.unit * 3,
  },
  signupFormInput: {
    color: '#111',
    '&:-webkit-autofill': {
      '-webkit-box-shadow': 'inset 0 0 0px 9999px white'
    }
  },
  signupFormMessage: {
    boxSizing: 'border-box',
    color: theme.palette.red,
    marginBottom: theme.spacing.unit * 3,
    height: 12,
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
  signupFormTitlePaper: {
    backgroundColor: '#0074D9',
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
  },
  signupFormTitle: {
    color: theme.palette.common.white,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.navy,
    }
  },
  signupFormTitleText: {
    color: 'inherit',
    letterSpacing: 18,
    fontWeight: 300,
  },
});

class SignupForm extends Component {
  state = {
    fields: {
      firstName: { error: false, label: 'First name', message: '', type: 'text', value: '' },
      lastName: { error: false, label: 'Last name', message: '', type: 'text', value: '' },
      username: { error: false, label: 'Username', message: '', type: 'email', value: '' },
      password: { error: false, label: 'Password', message: '',  type: 'password', value: '' },
      passwordConfirmation: { error: false, label: 'Confirm Password', message: '', type: 'password', value: '' },
    }
  };

  onChange = event => {
    this.setState({
      ...this.state,
      fields: {
        ...this.state.fields,
        [event.target.name]: {
          ...this.state.fields[event.target.name],
          value: event.target.value
        }
      }

    });
  };

  onSubmit = async () => {
    const { fields } = this.state;
    const { history } = this.props;

    if ( this.validatePassword() ) {
      const response = await signup(fields);
      if ( response.status !== 200 ) {
        this.setState({
          message: response.data.error
        });
      }
      response.status === 200 && history.push('/login');
    } else {
      this.setState({
        fields: {
          ...this.state.fields,
          passwordConfirmation: {
            ...this.state.fields.passwordConfirmation,
            error: true,
            message: 'Passwords do not match',
          }
        }
      });
    }
  };

  validatePassword = () => {
    const { fields } = this.state;
    if ( fields.password.value !== fields.passwordConfirmation.value ) return false;
    else return true;
  };

  validateForm = () => {
    const { fields } = this.state;
    const isFilledIn = Object.keys(fields)
      .map(field => fields[field].value)
      .every(val => validator.isLength(val, { min: 1 }));
    const isPasswordConfirmed = validator.equals(fields.password.value, fields.passwordConfirmation.value);
    const isValidEmail = validator.isEmail(fields.username.value);

    return !(isFilledIn && isPasswordConfirmed && isValidEmail);
  }

  render() {
    const { fields } = this.state;
    const { classes } = this.props;

    return <Grid
      className={classes.signupForm}
      container
      justify='center'>

      <Grid
        className={classes.signupFormContainer}
        item
        md={4}
        sm={7}
        xs={12}>

        <Paper
          className={classes.signupFormTitlePaper}
          elevation={1}>
          <Typography
            align='center'
            className={classes.signupFormTitle}
            component={Link}
            to='/'>
            <FontAwesomeIcon
              className={classes.signupFormLogo}
              color='#fff'
              icon={['fal', 'atom']}
              size='6x'
            />
            <Typography
              className={classes.signupFormTitleText}
              variant='title'>
              FUSION
            </Typography>
          </Typography>
        </Paper>

        <Paper
          className={classes.signupFormPaper}
          elevation={1}>
          <form>
            {
              Object.keys(fields).map((field, key) => {
                return <TextField
                  className={classes.signupFormTextField}
                  error={fields[field].error}
                  fullWidth
                  helperText={fields[field].message}
                  inputProps={{
                    className: classes.signupFormInput,
                  }}
                  key={key}
                  label={fields[field].label}
                  name={field}
                  onChange={this.onChange}
                  required
                  type={fields[field].type}
                  value={fields[field].value}
                />
              })
            }
          </form>

          <Typography
            className={classes.signupFormMessage}
            gutterBottom>
            { this.state.message }
          </Typography>

          <Button
            className={classes.signupFormButton}
            color='primary'
            disabled={this.validateForm()}
            fullWidth
            onClick={this.onSubmit}
            variant='raised'>
            Sign up
          </Button>

          <Button
            color='default'
            component={Link}
            fullWidth
            to='/login'
            variant='raised'>
            Go to Login
          </Button>

        </Paper>

      </Grid>

    </Grid>;
  }
}

export default withRouter(withStyles(styles)(SignupForm));