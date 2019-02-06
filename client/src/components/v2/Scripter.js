import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  description: {
    marginBottom: theme.spacing.unit * 2,
  },
  paper: {
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    width: 500,
  },
  scenario: {
    marginBottom: theme.spacing.unit * 2,
  },
  subtitle: {},
  title: {
    marginBottom: theme.spacing.unit,
  },
});

class Scripter extends Component {
  componentDidCatch = () => {
    return null;
  };

  renderDescription = () => {
    const { classes, description } = this.props;
    return <Typography className={classes.description}>{description}</Typography>;
  };

  renderScenario = (scenario) => {
    const { classes } = this.props;

    return (
      <Grid className={classes.scenario} item key={scenario.name}>
        <Typography variant='subtitle1'>{scenario.name}</Typography>
        <Typography>{scenario.message}</Typography>
      </Grid>
    );
  };

  renderScenarios = () => {
    const { scenarios } = this.props;

    return (
      <Grid container>
        {
          scenarios.map((scenario) => this.renderScenario(scenario))}
      </Grid>
    );
  };

  renderTitle = () => {
    const { classes, title } = this.props;
    return <Typography className={classes.title} variant='h6'>{title}</Typography>;
  };

  render = () => {
    const { classes, ...props } = this.props;

    return (
      <Paper className={classes.paper} {...props}>
        {this.renderTitle()}
        {this.renderDescription()}
        {this.renderScenarios()}
      </Paper>
    );
  };
}

Scripter.defaultProps = {
  description: 'Use the following scripts for the specified scenario.',
  scenarios: [
    { message: 'Hello, my name is [your name]. Who am I speaking with?', name: 'Welcome' },
    {  message: 'Hi, [his or her name]. How may I assist you today?', name: 'Follow up' },
  ],
  title: 'Call Scripts',
};

Scripter.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  description: PropTypes.string,
  scenarios: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  title: PropTypes.string,
};

export default withStyles(styles)(Scripter);