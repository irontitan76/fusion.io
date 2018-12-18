import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

// import { orgs } from './organizations';

const styles = theme => ({
  org: {
    color: theme.palette.offwhite,
    fontWeight: 300,
    marginBottom: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 10,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 3,
  },
  orgContainer: {},
  orgContent: {},
  orgIcon: {
    paddingRight: theme.spacing.unit * 2,
  },
  title: {
    color: theme.palette.dark,
    paddingBottom: theme.spacing.unit * 6,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 6,
  },
  titleContainer: {
    backgroundColor: theme.palette.offwhite,
    borderBottom: `1px solid ${theme.palette.gray}`,
    marginBottom: theme.spacing.unit * 5,
  }
});

class Organizations extends Component {
  renderTitle = (title, bgColor, icon) => {
    const { classes, theme } = this.props;

    return <Typography
      align='left'
      className={classes.org}
      style={{ backgroundColor: theme.palette[bgColor || 'offwhite'] }}
      variant='h6'>
      <FontAwesomeIcon className={classes.orgIcon} icon={['fal', icon]} />
      { title }
    </Typography>
  };

  renderOrganization = (title, theme, icon) => {
    const { classes } = this.props;

    return <Grid container>
      <Grid item xs={3}>
        { this.renderTitle(title, theme, icon) }
      </Grid>
      <Grid className={classes.orgContent} item xs={12}>

      </Grid>
    </Grid>
  }

  render() {
    const { classes } = this.props;

    return <Grid
      alignItems='center'
      container
      justify='center'>

      <Grid
        align='center'
        className={classes.titleContainer}
        item
        xs={12}>
        <Typography
          className={classes.title}
          variant='h4'>
          Our Organizations
        </Typography>
      </Grid>

      <Grid
        className={classes.orgContainer}
        item
        xs={12}>

        { this.renderOrganization('Fusion A.I.', 'navy', 'brain') }
        { this.renderOrganization('Fusion Consulting', 'blue', 'users') }

      </Grid>
    </Grid>;
  }
}


// { this.renderOrganization('Fusion Cosmos', 'dark', 'space-shuttle' ) }
// { this.renderOrganization('Fusion Energy', 'orange', 'solar-panel' ) }
// { this.renderOrganization('Fusion Finance', 'green', 'credit-card-blank' ) }
// { this.renderOrganization('Fusion Health', 'teal', 'dna' ) }
// { this.renderOrganization('Fusion Legal', 'maroon', 'balance-scale') }
// { this.renderOrganization('Fusion Media', 'red', 'broadcast-tower' ) }
// { this.renderOrganization('Fusion Technology', 'blue', 'code') }
// { this.renderOrganization('Fusion Transport', 'yellow', 'map-marked') }



export default withStyles(styles, { withTheme: true })(Organizations);