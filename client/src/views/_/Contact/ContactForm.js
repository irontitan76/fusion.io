import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  contactContent: {
    backgroundColor: theme.palette.offwhite,
    height: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
  },
  contactForm: {},
  contactTextField: {
    marginBottom: theme.spacing.unit * 3,
  }
});

export class ContactForm extends Component {
  renderFields = () => {
    const { classes, fields } = this.props;

    return fields.map((field, key) => {
      let options = null;
      if (field.select && field.options ) {
        options = field.options.map((option) => {
          return <MenuItem key={option.label} value={option.value}>
            {option.label}
          </MenuItem>;
        });
      }

      return <TextField
        className={classes.contactTextField}
        fullWidth
        key={key}
        label={field.label}
        required={field.required}
        type={field.type}
        value={field.type === 'select' ? 0 : undefined}
        {...field}>
        {options}
      </TextField>
    });
  };

  render() {
    const { classes, title } = this.props;

    return <Grid
      className={classes.contactContent}
      item
      xs={12}>
      <Grid
        className={classes.contactForm}
        container
        justify='center'>
        <Grid
          item
          md={6}
          xs={12}>
          <form>
            {this.renderFields()}
            <Grid container justify='flex-end'>
              <Button
                color='primary'
                type='submit'
                variant='contained'>
                {title}
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  }
}

export default withStyles(styles)(ContactForm);

