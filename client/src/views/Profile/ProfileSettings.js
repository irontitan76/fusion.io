import React, { Component } from 'react';
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
  root: {
    backgroundColor: 'rgb(250,251,252)',
    height: '100%',
    paddingTop: theme.spacing.unit * 4,
  },
  search: {
    backgroundColor: '#fff',
    marginBottom: theme.spacing.unit * 3,
  },
});

const settings = [
  {
    icon: <FontAwesomeIcon icon={[ 'fal', 'user-circle' ]} size='lg' />,
    label: 'Account',
    name: 'account',
    options: [

    ],
  },
  {
    icon: <FontAwesomeIcon icon={[ 'fal', 'globe' ]} size='lg' />,
    label: 'Language',
    name: 'lanaguage',
    options: [

    ],
  },
  {
    icon: <FontAwesomeIcon icon={[ 'fal', 'comment-plus' ]} size='lg' />,
    label: 'Subscriptions',
    name: 'subscriptions',
    options: [

    ],
  }
]

class ProfileSettings extends Component {
  renderPanels = () => {
    const { classes } = this.props;

    return settings.map((setting) => {
      return <ExpansionPanel key={setting.name}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}>
          {setting.icon ? setting.icon : null}
          <Typography
            className={classes.heading}>
            {setting.label}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>;
    })
  };

  render() {
    const { classes } = this.props;

    return <Grid className={classes.root} container justify='center'>
      <Grid item md={8} xs={12}>
        <TextField
          className={classes.search}
          fullWidth
          label='Search Settings...'
          placeholder='Search Settings...'
          variant='outlined' />
        {this.renderPanels()}
      </Grid>
    </Grid>;
  }
}

export default withStyles(styles)(ProfileSettings);