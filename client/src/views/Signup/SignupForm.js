import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
  signupFormButton: {
    marginBottom: theme.spacing.unit * 2,
  },
  signupFormContainer: {},
  signupFormLogo: {
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
  signupFormTitlePaper: {
    backgroundColor: '#0074D9',
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
  },
  signupFormTitle: {},
  signupFormTitleText: {
    color: '#fff',
    letterSpacing: 18,
    fontWeight: 300,
  },
});

class SignupForm extends Component {
  state = {};

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = () => {
    const { password, username } = this.state;
    signup(password, username);
    window.location.pathname = '/';
  };

  onSwitchChange = name => event => {
    this.setState({ [name]: event.target.checked });
  }

  render() {
    const { firstName, lastName, password, passwordConfirmation, username } = this.state;
    const { classes } = this.props;

    return <Grid
      className={classes.signupForm}
      container
      justify='center'>

      <Grid
        className={classes.signupFormContainer}
        item
        md={3}
        sm={6}
        xs={12}>

        <Paper
          className={classes.signupFormTitlePaper}
          elevation={1}>
          <Typography
            align='center'
            className={classes.signupFormTitle}
            component='div'>
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
            <TextField
              className={classes.signupFormTextField}
              fullWidth
              label='First name'
              name='firstName'
              onChange={this.onChange}
              value={firstName}
            />
            <TextField
              className={classes.signupFormTextField}
              fullWidth
              label='Last name'
              name='firstName'
              onChange={this.onChange}
              value={lastName}
            />
            <TextField
              className={classes.signupFormTextField}
              fullWidth
              label='Username'
              name='username'
              onChange={this.onChange}
              value={username}
            />
            <TextField
              className={classes.signupFormTextField}
              fullWidth
              label='Password'
              name='password'
              onChange={this.onChange}
              value={password}
            />
            <TextField
              className={classes.signupFormTextField}
              fullWidth
              label='Confirm password'
              name='passwordConfirmation'
              onChange={this.onChange}
              value={passwordConfirmation}
            />
          </form>

          <Button
            className={classes.signupFormButton}
            color='primary'
            fullWidth
            onClick={this.onSubmit}
            variant='raised'>
            Sign in
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

export default withStyles(styles)(SignupForm);