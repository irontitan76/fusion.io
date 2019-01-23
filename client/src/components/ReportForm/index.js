import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Message from 'components/Message';
import ReportFormDialog from './ReportFormDialog';
import ReportFormSidebar from './ReportFormSidebar';

const styles = theme => ({
  root: {
    height: '100%',
  },
  standardContainer: {
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 3,
  },
  title: {
    fontWeight: 400,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 3,
  },
});

class ReportForm extends Component {
  renderFields = () => {
    const { classes, fields } = this.props;

    return fields.map((field) => {
      return (
        <Grid
          className={classes.standardContainer}
          item
          key={field.label}
          {...field.size}
        >
          <TextField {...field} />
        </Grid>
      );
    });
  };

  render() {
    const {
      cancelButton,
      classes,
      onCancel,
      onSubmit,
      submitButton,
      title,
    } = this.props;

    return (
      <>
        <Grid
          className={classes.root}
          container
          justify='flex-start'
        >

          <Grid item md={8} xs={12} style={{ overflowY: 'scroll' }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography className={classes.title} variant='h6'>
                  {title}
                </Typography>
              </Grid>

              {this.renderFields()}

              <Grid className={classes.standardContainer} item xs={12}>
                <Grid container justify='space-between'>
                  <Grid item>
                    <Button color='primary' fullWidth onClick={onSubmit} variant='contained'>
                      {submitButton}
                    </Button>
                  </Grid>
                  {
                    onCancel ? (
                      <Grid item>
                        <ReportFormDialog
                          cancelButton={cancelButton}
                          onCancel={onCancel}
                        />
                      </Grid>
                    ) : null
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <ReportFormSidebar />
        </Grid>

        <Message />
      </>
    );
  }
}

ReportForm.defaultProps = {
  cancelButton: '',
  onCancel: () => null,
};

ReportForm.propTypes = {
  cancelButton: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  submitButton: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(ReportForm);