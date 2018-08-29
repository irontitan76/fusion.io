import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    backgroundColor: '#333',
    borderTop: '1px solid #dedede',
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
  }
});

export class Footer extends Component {
  render() {
    const { classes } = this.props;

    const icons = [
      ['fab', 'twitter'],
      ['fab', 'github'],
      ['fab', 'facebook'],
      ['fab', 'instagram']
    ];

    return (
      <Grid
        alignItems='center'
        className={classes.root}
        container
        justify='space-between'>

        <Grid item xs={2}>
          <Typography style={{ color: 'white' }} variant='body1'>
            COMPANY
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography style={{ color: 'white' }} variant='body1'>
            NEWS & EVENTS
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography style={{ color: 'white' }} variant='body1'>
            COMMUNITY
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography style={{ color: 'white' }} variant='body1'>
            CUSTOMER RESOURCES
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography style={{ color: 'white' }} variant='body1'>
            COMMUNITY
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography variant='body1' style={{ color: 'white' }}>
            FOLLOW FUSION
          </Typography>
          {
            icons.map((icon, key) => (
              <IconButton key={key} style={{ color: 'white', fontSize: 18, height: 36, width: 36 }}>
                <FontAwesomeIcon icon={icon} />
              </IconButton>
            ))
          }
        </Grid>

        <Grid item xs={6}>
          <Typography style={{ color: 'white', fontWeight: 300 }} variant='body1'>
            © Copyright 2018 Fusion Industries, Inc.
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography align='right' style={{ color: 'white', fontWeight: 300 }} variant='body1'>
            Privacy &nbsp;| &nbsp;Terms of Use &nbsp;| &nbsp;Cookies &nbsp;| &nbsp;Sitemap
          </Typography>
        </Grid>

      </Grid>
    );
  }
}

Footer.defaultProps = {};
Footer.propTypes = {};

export default withStyles(styles)(Footer);