import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';

const fields = [
  {
    label: 'Business Need',
    options: [
      {
        label: 'Consulting',
        value: 0,
      },
      {
        label: 'Technology',
        value: 1,
      },
      {
        label: 'Other',
        value: 2,
      },
    ],
    required: true,
    select: true,
    type: 'select',
  },
  {
    label: 'First Name',
    required: true,
    type: 'text',
  },
  {
    label: 'Last Name',
    required: true,
    type: 'text',
  },
  {
    label: 'Company',
    required: true,
    type: 'text',
  },
  {
    label: 'Role / Title',
    required: true,
    type: 'text',
  },
  {
    label: 'Email Address',
    required: true,
    type: 'email',
  },
  {
    label: 'Phone Number',
    required: false,
    type: 'text',
  },
  {
    label: 'Comments',
    multiline: true,
    required: false,
    rows: 10,
    type: 'text',
  },
];

const styles = theme => ({
  contactContent: {
    backgroundColor: theme.palette.offwhite,
    height: '100%',
    paddingBottom: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
  },
  contactForm: {},
  contactTextField: {
    marginBottom: theme.spacing.unit * 3,
  },
});

class ContactForm extends Component {
  renderFields = () => {
    const { classes } = this.props;

    return fields.map((field) => {
      let options = null;
      if (field.select && field.options) {
        options = field.options.map((option) => {
          return (
            <MenuItem key={option.label} value={option.value}>
              {option.label}
            </MenuItem>
          );
        });
      }

      return (
        <TextField
          className={classes.contactTextField}
          fullWidth
          key={field.label}
          label={field.label}
          required={field.required}
          type={field.type}
          value={field.type === 'select' ? 0 : undefined}
          {...field}
        >
          {options}
        </TextField>
      );
    });
  };

  render() {
    const { classes, title } = this.props;

    return (
      <Grid className={classes.contactContent} item xs={12}>
        <Grid className={classes.contactForm} container justify='center'>
          <Grid item md={6} xs={12}>
            <form>
              {this.renderFields()}
              <Grid container justify='flex-end'>
                <Button color='primary' type='submit' variant='contained'>
                  {title}
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(ContactForm);
