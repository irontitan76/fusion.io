import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import { injectIntl, intlShape } from 'react-intl';

import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Input from './Input';

const styles = (theme) => ({
  changePassword: {
    '& > a:visited': {
      color: theme.palette.secondary.main,
    },
    color: theme.palette.primary.main,
  },
  container: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
  },
  copyright: {
    color: theme.palette.grey[500],
  },
  disclaimer: {
    paddingBottom: theme.spacing.unit * 4,
    paddingTop: theme.spacing.unit,
  },
  error: {
    color: theme.palette.error.main,
  },
  form: {
    paddingBottom: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 6,
  },
  input: {
    marginBottom: theme.spacing.unit * 1.5,
    minHeight: 50,
  },
  item: {},
  message: {
    flexGrow: 1,
    height: 30,
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
  },
  messageContainer: {
    marginBottom: theme.spacing.unit * 3,
  },
  slogan: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing.unit * 4,
  },
  submit: {
    marginBottom: theme.spacing.unit * 3,
  },
  title: {
    marginBottom: theme.spacing.unit,
    paddingTop: theme.spacing.unit * 3,
  },
});

class Login extends Component {
  renderChangePassword = () => {
    const { classes, intl, link } = this.props;

    if (!link[0]) return null;

    return (
      <Typography
        className={classes.changePassword}
        component={Grid}
        item
      >
        <Link to={link[1]}>
          {intl.formatMessage({ id: link[0] })}
        </Link>
      </Typography>
    );
  };

  renderCopyright = () => {
    const { classes, copyright, intl } = this.props;

    if (!copyright) return null;

    return (
      <Typography align='center' className={classes.copyright}>
        {'\u00A9'}
        {intl.formatMessage({ id: copyright })}
      </Typography>
    );
  };

  renderDisclaimer = () => {
    const { classes, disclaimer, intl } = this.props;

    if (!disclaimer) return null;

    return (
      <Typography className={classes.disclaimer}>
        {intl.formatMessage({ id: 'login.disclaimer.text' })}
      </Typography>
    );
  };

  renderFields = () => {
    const { classes, fields, intl, onChange } = this.props;

    return fields.map((field, id) => {
      const renderedField = {
        ...field,
        label: intl.formatMessage({ id: field.label }),
        placeholder: intl.formatMessage({ id: field.placeholder }),
      };

      return (
        <Input
          className={classes.input}
          field={renderedField}
          id={id}
          key={field.name}
          onChange={onChange}
        />
      );
    });
  };

  renderLogo = () => {
    const { logo } = this.props;
    return <center>{logo}</center>;
  };

  renderMessage = () => {
    const { classes, intl, isError, message } = this.props;

    return (
      <Typography
        className={`${classes.message} ${isError ? classes.error : ''}`}
        component={Grid}
        item
      >
        {message ? intl.formatMessage({ id: message }) : ''}
      </Typography>
    );
  };

  renderSlogan = () => {
    const { classes, intl, slogan } = this.props;

    return (
      <Typography
        align='center'
        className={classes.slogan}
        variant='subtitle1'
      >
        {slogan ? intl.formatMessage({ id: slogan }) : ''}
      </Typography>
    );
  };

  renderSubmit = () => {
    const { classes, intl, submit } = this.props;

    return (
      <center>
        <Button
          className={classes.submit}
          color='primary'
          fullWidth
          onClick={submit[1]}
          variant='contained'
        >
          {submit[0] ? intl.formatMessage({ id: submit[0] }) : ''}
        </Button>
      </center>
    );
  };

  renderTitle = () => {
    const { classes, intl, title } = this.props;

    return (
      <Typography
        align='center'
        className={classes.title}
        variant='h6'
      >
        {title ? intl.formatMessage({ id: title }) : ''}
      </Typography>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid alignItems='center' className={classes.container} container justify='center'>
        <Fade in timeout={1000}>
          <Grid className={classes.item} item md={4} xl={5} xs={12}>
            <Paper className={classes.form} elevation={1} square>
              {this.renderLogo()}
              {this.renderTitle()}
              {this.renderSlogan()}
              {this.renderFields()}
              <Grid alignItems='baseline' className={classes.messageContainer} container>
                {this.renderMessage()}
                {this.renderChangePassword()}
              </Grid>
              {this.renderDisclaimer()}
              {this.renderSubmit()}
              {this.renderCopyright()}
            </Paper>
          </Grid>
        </Fade>
      </Grid>
    );
  }
}

const buttonShape = PropTypes.arrayOf((propValue) => {
  if (typeof propValue[0] !== 'string') {
    return new Error(`${propValue}[0] needs to be a string`);
  }

  if (!propValue[1] || !{}.toString.call(propValue[1]) === '[object Function]') {
    return new Error(`${propValue}[1] needs to be a function`);
  }
});

Login.defaultProps = {
  copyright: 'login.copyright.text',
  disclaimer: '',
  isError: false,
  link: [],
  logo: '',
  message: '',
  slogan: '',
  title: 'FUSION',
};

Login.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  copyright: PropTypes.string,
  disclaimer: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  intl: intlShape.isRequired,
  isError: PropTypes.bool,
  link: PropTypes.arrayOf(PropTypes.string),
  logo: PropTypes.node,
  message: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  slogan: PropTypes.string,
  submit: buttonShape.isRequired,
  title: PropTypes.string,
};

export default withStyles(styles)(injectIntl(Login));