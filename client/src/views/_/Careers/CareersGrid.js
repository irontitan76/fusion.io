import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import { FormattedMessage, injectIntl } from 'react-intl';

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
  xs: 12,
};

const grid = {
  teams: [
    {
      button1: {
        label: 'careers.team[0].button[0]',
        path: '/teams/engineering',
      },
      button2: {
        label: 'careers.team[0].button[1]',
        path: '/careers?team=engineering',
      },
      content: 'careers.team[0].content',
      divider: true,
      media: {
        alt: 'engineering',
        src: '/images/engineering-resized.jpg',
        type: 'img',
      },
      size,
      title: 'careers.team[0].title',
    },
    {
      button1: {
        label: 'careers.team[1].button[0]',
        path: '/teams/design',
      },
      button2: {
        label: 'careers.team[1].button[1]',
        path: '/careers?team=design',
      },
      content: 'careers.team[1].content',
      divider: true,
      media: {
        alt: 'user experience & design',
        src: '/images/design-resized.jpg',
        type: 'img',
      },
      size,
      title: 'careers.team[1].title',
    },
    {
      button1: {
        label: 'careers.team[2].button[0]',
        path: '/teams/sales',
      },
      button2: {
        label: 'careers.team[2].button[1]',
        path: '/careers?team=sales',
      },
      content: 'careers.team[2].content',
      divider: true,
      media: {
        alt: 'sales',
        src: '/images/sales-resized.jpg',
        type: 'img',
      },
      size,
      title: 'careers.team[2].title',
    },
    {
      button1: {
        label: 'careers.team[3].button[0]',
        path: '/teams/finance',
      },
      button2: {
        label: 'careers.team[3].button[1]',
        path: '/careers?team=finance',
      },
      content: 'careers.team[3].content',
      divider: true,
      media: {
        alt: 'finance',
        src: '/images/finance-resized.jpg',
        type: 'img',
      },
      size,
      title: 'careers.team[3].title',
    },
    {
      button1: {
        label: 'careers.team[4].button[0]',
        path: '/teams/marketing',
      },
      button2: {
        label: 'careers.team[4].button[1]',
        path: '/careers?team=marketing',
      },
      content: 'careers.team[4].content',
      divider: true,
      media: {
        alt: 'marketing',
        src: '/images/marketing-resized.jpg',
        type: 'img',
      },
      size,
      title: 'careers.team[4].title',
    },
    {
      button1: {
        label: 'careers.team[5].button[0]',
        path: '/teams/legal',
      },
      button2: {
        label: 'careers.team[5].button[1]',
        path: '/careers?team=legal',
      },
      content: 'careers.team[5].content',
      divider: true,
      media: {
        alt: 'legal',
        src: '/images/legal-resized.jpg',
        type: 'img',
      },
      size,
      title: 'careers.team[5].title',
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
    height: 75,
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
    },
  },
  teamTitle: {},
});

class CareersGrid extends Component {
  renderTeam = (team, key) => {
    const { classes, intl, onClick } = this.props;

    return (
      <Grid
        className={classes.team}
        item
        key={key}
        {...team.size}
      >
        <Card className={classes.teamCard} elevation={2}>

          <CardMedia
            alt={team.media.alt}
            className={classes.teamMedia}
            component={team.media.type || 'div'}
            src={team.media.src + '/388/200?maintain=false'}
          />

          <CardHeader
            className={classes.teamTitle}
            title={intl.formatMessage({ id: team.title })}
            titleTypographyProps={{ variant: 'subtitle1' }}
          />

          <CardContent>
            <Typography
              className={classes.teamContent}
              component='p'
            >
              <FormattedMessage id={team.content} />
            </Typography>
          </CardContent>

          { team.divider ? <Divider light /> : null }

          <CardActions className={classes.teamActions}>
            <Button
              aria-label={team.button1.label}
              color='primary'
              className={classes.teamButton}
              component={Link}
              size='small'
              to={team.button1.path}
            >
              <FormattedMessage id={team.button1.label} />
            </Button>
            <Button
              aria-label={team.button2.label}
              color='primary'
              className={classes.teamButton}
              component={Link}
              onClick={() => onClick({
                target: { name: 'team', value: intl.formatMessage({ id: team.title }) },
              })}
              size='small'
              to='/careers'
            >
              <FormattedMessage id={team.button2.label} />
            </Button>
          </CardActions>

        </Card>
      </Grid>
    );
  };

  renderTeams = () => {
    const { teams } = grid;

    if (!teams) return null;
    return teams.map((team, key) => this.renderTeam(team, key));
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid
        className={classes.teams}
        container
        justify='center'
        spacing={24}
      >
        {this.renderTeams()}
      </Grid>
    );
  }
}

CareersGrid.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  intl: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(injectIntl(CareersGrid));