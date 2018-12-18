import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { grid } from './careers';

const styles = theme => ({
  team: {},
  teamActions: {},
  teamButton: {},
  teamCard: {
    backgroundColor: '#fcfcfc',
    marginBottom: theme.spacing.unit * 3,
  },
  teamContent: {
    fontWeight: 300,
    height: 75
  },
  teamMedia: {
    height: 160,
    [theme.breakpoints.down('sm')]: {
      height: 200,
    },
  },
  teams: {
    margin: 'auto',
    marginBottom: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit * 12,
    paddingRight: theme.spacing.unit * 12,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
    }
  },
  teamTitle: {}
});

class CareersGrid extends Component {
  renderTeam = (team, key) => {
    const { classes } = this.props;

    return <Grid
      className={classes.team}
      item
      key={key}
      { ...team.size }>
      <Card className={classes.teamCard} elevation={2}>

        <CardMedia
          className={classes.teamMedia}
          component={team.media.type || 'div'}
          src={team.media.src} />

        <CardHeader
          className={classes.teamTitle}
          title={team.title}
          titleTypographyProps={{ variant: 'subtitle1' }} />

        <CardContent>
          <Typography
            className={classes.teamContent}
            component='p'>
            {team.content}
          </Typography>
        </CardContent>

        { team.divider ? <Divider light /> : null }

        <CardActions className={classes.teamActions}>
          <Button
            color='primary'
            className={classes.teamButton}
            component={Link}
            size='small'
            to={team.button1.path}>
            {team.button1.label}
          </Button>
          <Button
            color='primary'
            className={classes.teamButton}
            component={Link}
            size='small'
            to={team.button2.path}>
            {team.button2.label}
          </Button>
        </CardActions>

      </Card>
    </Grid>;
  };

  renderTeams = () => {
    const { teams } = grid;

    if (!teams) return null;
    return teams.map((team, key) => this.renderTeam(team, key));
  };

  render() {
    const { classes } = this.props;

    return <Grid
      className={classes.teams}
      container
      justify='center'
      spacing={24}>
      {this.renderTeams()}
    </Grid>;
  }
}

export default withStyles(styles)(CareersGrid);