import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    paddingLeft: theme.spacing.unit * 2,
  },
  icon: {
    color: theme.palette.text.primary,
  },
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
    paddingTop: theme.spacing.unit * 4,
  },
  search: {
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing.unit * 3,
  },
});

const settings = [
  {
    icon: ['fal', 'user-circle'],
    label: 'Account',
    name: 'account',
    options: [

    ],
  },
  {
    icon: ['fal', 'globe'],
    label: 'Language',
    name: 'lanaguage',
    options: [

    ],
  },
  {
    icon: ['fal', 'comment-plus'],
    label: 'Subscriptions',
    name: 'subscriptions',
    options: [],
  },
];

class ProfileSettings extends Component {
  renderPanels = () => {
    const { classes } = this.props;

    return settings.map((setting) => {
      return (
        <ExpansionPanel key={setting.name}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            {
              setting.icon
                ? <FontAwesomeIcon className={classes.icon} icon={setting.icon} size='lg' />
                : null
            }
            <Typography className={classes.heading}>
              {setting.label}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.root} container justify='center'>
        <Grid item md={8} xs={12}>
          <TextField
            className={classes.search}
            fullWidth
            label='Search Settings...'
            placeholder='Search Settings...'
            variant='outlined'
          />
          {this.renderPanels()}
        </Grid>
      </Grid>
    );
  }
}

ProfileSettings.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(ProfileSettings);