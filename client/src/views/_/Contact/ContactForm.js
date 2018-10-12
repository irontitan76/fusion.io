import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
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
  render() {
    const { classes, fields, title } = this.props;

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
            {
              fields.map((field, key) => (
                <TextField
                  className={classes.contactTextField}
                  fullWidth
                  key={key}
                  label={field.label}
                  required={field.required}
                  type={field.type}
                  {...field}
                />
              ))
            }
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

