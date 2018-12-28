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

const size = {
  md: 3,
  sm: 6,
  xl: 2,
  xs: 12
};

export const grid = {
  teams: [
    {
      button1: {
        label: 'Learn more',
        path: '/teams/engineering'
      },
      button2: {
        label: 'See Jobs',
        path: '/careers?team=engineering'
      },
      content: 'Develop solutions and provide professional services for \
        businesses.',
      divider: true,
      media: {
        alt: 'engineering',
        src: '/images/engineering-resized.jpg',
        type: 'img'
      },
      size,
      title: 'Engineering & Technology',
    },
    {
      button1: {
        label: 'Learn more',
        path: '/teams/design'
      },
      button2: {
        label: 'See Jobs',
        path: '/careers?team=design'
      },
      content: 'Create intuitive experiences and design the future of user \
        interaction.',
      divider: true,
      media: {
        alt: 'user experience & design',
        src: '/images/design-resized.jpg',
        type: 'img'
      },
      size,
      title: 'User Experience & Design',
    },
    {
      button1: {
        label: 'Learn more',
        path: '/teams/sales'
      },
      button2: {
        label: 'See Jobs',
        path: '/careers?team=sales'
      },
      content: 'Find, grow, and lead the people who make Fusion great.',
      divider: true,
      media: {
        alt: 'sales',
        src: '/images/sales-resized.jpg',
        type: 'img'
      },
      size,
      title: 'Accounts & Sales',
    },
    {
      button1: {
        label: 'Learn more',
        path: '/teams/finance'
      },
      button2: {
        label: 'See Jobs',
        path: '/careers?team=finance'
      },
      content: 'Drive high impact revenues and provide guidance for investment \
        decisions.',
      divider: true,
      media: {
        alt: 'finance',
        src: '/images/finance-resized.jpg',
        type: 'img'
      },
      size,
      title: 'Finance',
    },
    {
      button1: {
        label: 'Learn more',
        path: '/teams/marketing'
      },
      button2: {
        label: 'See Jobs',
        path: '/careers?team=marketing'
      },
      content: 'Protect, enhance and build our company reputation through \
        media.',
      divider: true,
      media: {
        alt: 'marketing',
        src: '/images/marketing-resized.jpg',
        type: 'img'
      },
      size,
      title: 'Marketing',
    },
    {
      button1: {
        label: 'Learn more',
        path: '/teams/legal'
      },
      button2: {
        label: 'See Jobs',
        path: '/careers?team=legal'
      },
      content: 'Optimize industry policy and govern how stakeholders interact \
        with each other.',
      divider: true,
      media: {
        alt: 'legal',
        src: '/images/legal-resized.jpg',
        type: 'img'
      },
      size,
      title: 'Legal & Corporate Affairs',
    },
  ],
};

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