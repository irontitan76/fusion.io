import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import withWidth from '@material-ui/core/withWidth';

import Input from 'common/components/Input';

const styles = (theme) => ({
  button: {},
  buttonContainer: {
    '&:last-child': {
      marginRight: 0,
    },
    marginRight: theme.spacing.unit * 4,
  },
  buttons: {},
  content: {
    paddingBottom: theme.spacing.unit * 3,
  },
  description: {
    marginBottom: theme.spacing.unit * 2,
  },
  divider: {
    marginBottom: theme.spacing.unit * 2,
  },
  root: {
    backgroundColor: theme.palette.background.default,
    paddingBottom: theme.spacing.unit * 3,
  },
  step: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 2,
  },
  stepper: {
    backgroundColor: 'transparent',
  },
  stepTitleXs: {
    paddingLeft: theme.spacing.unit * 3,
  },
  subtitle: {
    display: 'inline',
  },
  title: {
    display: 'inline',
    marginRight: theme.spacing.unit,
  },
});

class Process extends Component {
  componentDidCatch = () => {
    return null;
  };

  renderButtons = () => {
    const { activeStep, back, classes, finish, intl, next, skip, steps } = this.props;

    const backText = intl.formatMessage({ id: back[0] });
    const finishText = intl.formatMessage({ id: finish[0] });
    const nextText = intl.formatMessage({ id: next[0] });
    const skipText = intl.formatMessage({ id: skip[0] });

    const isLast = activeStep === steps.length - 1;
    const rightFunc = isLast ? finish[1] : next[1];
    const rightText = isLast ? finishText : nextText;

    const renderedSkip = skip && !!steps[activeStep].skip
      ? (
        <Grid className={classes.buttonContainer} item>
          <Button
            className={classes.button}
            color='default'
            disabled={activeStep >= steps.length - 2}
            onClick={skip[1]}
            variant='outlined'
          >
            {skipText}
          </Button>
        </Grid>
      )
      : null;

    return (
      <Grid className={classes.buttons} container justify='center'>
        <Grid className={classes.buttonContainer} item>
          <Button
            className={classes.button}
            color='secondary'
            disabled={activeStep === 0}
            onClick={back[1]}
            variant='outlined'
          >
            <ChevronLeftIcon />
            {backText}
          </Button>
        </Grid>
        {renderedSkip}
        <Grid className={classes.buttonContainer} item>
          <Button
            className={classes.button}
            color='primary'
            onClick={rightFunc}
            variant='outlined'
          >
            {rightText}
            <ChevronRightIcon />
          </Button>
        </Grid>
      </Grid>
    );
  };

  renderDescription = (description) => {
    const { classes, intl } = this.props;

    if (!description) return null;

    return (
      <Grid item xs={12}>
        <Typography className={classes.description} variant='body1'>
          {intl.formatMessage({ id: description })}
        </Typography>
      </Grid>
    );
  };

  renderSectionColumn = (columnFields, index) => {
    return columnFields.map((field, id) => {
      const autoFocusId = index + id;
      return <Input field={field} id={autoFocusId} key={field.name} />;
    });
  };

  checkColumns = (columns) => {
    return columns > 0 && columns <= 12 ? columns : 12;
  };

  renderSectionColumns = (columns, fields, index) => {
    const numbers = [];
    const adjustedColumns = this.checkColumns(columns);
    const leftover = fields.length % adjustedColumns;
    const numInColumn = Math.floor(fields.length / adjustedColumns);

    // TODO: Refactor below 2 functions into while loop
    for (let i = 0; i < adjustedColumns; i++) {
      numbers.push(numInColumn);
    }

    for (let j = 0; j < leftover; j++) {
      numbers[j] = numbers[j] + 1;
    }

    let start = 0;
    return numbers.map((number, i) => {
      const allFields = [...fields];
      const columnFields = [...allFields.splice(start, number)];

      start = start + number;

      const md = Math.floor(12 / adjustedColumns);

      const columnNum = i;

      return (
        <Grid item key={columnNum} md={md} xs={12}>
          {this.renderSectionColumn(columnFields, index + i)}
        </Grid>
      );
    });
  };

  renderSection = (section, index) => {
    const { classes } = this.props;

    return (
      <Grid className={classes.step} container key={section.title}>
        {this.renderTitle(section.subtitle, section.title)}
        {this.renderDescription(section.description)}
        <Grid className={classes.content} item xs={12}>
          <Grid container justify='space-between' spacing={24}>
            {this.renderSectionColumns(section.columns, section.fields, index)}
          </Grid>
        </Grid>
      </Grid>
    );
  };

  renderSections = () => {
    const { activeStep } = this.props;
    const stepContent = this.getStepContent();

    if (!stepContent[activeStep]) return null;

    return stepContent[activeStep].map((section, index) => {
      return this.renderSection(section, index);
    });
  };

  renderStep = (step) => {
    const { intl, optionalText } = this.props;

    const renderedStep = step.name || step;
    const title = intl.formatMessage({ id: renderedStep });

    const optional = step.skip
      ? (
        <Typography variant='caption'>
          {optionalText ? intl.formatMessage({ id: optionalText }) : 'Optional' }
        </Typography>
      )
      : null;

    return (
      <Step key={0}>
        <StepLabel optional={optional}>
          {title}
        </StepLabel>
      </Step>
    );
  };

  renderSteps = () => {
    const { activeStep, classes, steps, width } = this.props;

    if (width === 'xs') {
      return (
        <Typography className={classes.stepTitleXs} variant='h5'>
          {steps[activeStep].name || steps[activeStep]}
        </Typography>
      );
    }

    return (
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((step) => this.renderStep(step))}
      </Stepper>
    );
  };

  renderTitle = (subtitle, title) => {
    const { classes, intl } = this.props;

    if (!subtitle && !title) return null;

    const renderedSubtitle = subtitle
      ? (
        <Typography
          className={classes.subtitle}
          variant='subtitle1'
        >
          {intl.formatMessage({ id: subtitle })}
        </Typography>
      )
      : null;

    return (
      <Grid item xs={12}>
        <Typography className={classes.title} variant='h6'>
          {intl.formatMessage({ id: title })}
        </Typography>
        {renderedSubtitle}
        <Divider className={classes.divider} />
      </Grid>
    );
  };

  getStepContent = () => {
    const { sections } = this.props;

    const steps = [];
    sections.forEach((section) => {
      const index = section.step;

      if (typeof steps[index] === 'undefined') {
        steps[index] = [];
      }

      steps[index].push(section);
    });
    return steps;
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.renderSteps()}
        {this.renderSections()}
        {this.renderButtons()}
      </div>
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

Process.defaultProps = {
  optionalText: '',
  skip: ['', () => null],
};

Process.propTypes = {
  activeStep: PropTypes.number.isRequired,
  back: buttonShape.isRequired,
  classes: PropTypes.shape({}).isRequired,
  finish: buttonShape.isRequired,
  intl: intlShape.isRequired,
  next: buttonShape.isRequired,
  optionalText: PropTypes.string,
  sections: PropTypes.arrayOf(PropTypes.shape({
    columns: PropTypes.number,
    fields: PropTypes.array,
    step: PropTypes.number.isRequired,
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired,
  })).isRequired,
  skip: buttonShape,
  steps: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  width: PropTypes.string.isRequired,
};

export default withStyles(styles)(withWidth()(injectIntl(Process)));