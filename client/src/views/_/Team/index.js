import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import withRouter from 'react-router-dom/withRouter';
import { FormattedMessage } from 'react-intl';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Footer from 'components/Footer';

const styles = theme => ({
  team: {},
  teamButton: {
    color: theme.palette.primary.main,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
  teamDescription: {
    padding: theme.spacing.unit * 5,
  },
  teamDescriptionText: {
    fontWeight: 300,
    marginBottom: theme.spacing.unit * 3,
  },
  teamDescriptionTitle: {
    fontWeight: 300,
    marginBottom: theme.spacing.unit * 3,
  },
  teamLatest: {
    padding: theme.spacing.unit * 5,
  },
  teamPositions: {
    padding: theme.spacing.unit * 5,
  },
  teamPositionsTitle: {
    fontWeight: 300,
    marginBottom: theme.spacing.unit * 3,
  },
  teamRoleCard: {},
  teamRoleCardContent: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  teamRoleCardHeader: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  teamRoleCardHeaderTitle: {
    color: theme.palette.primary.main,
  },
  teamTitle: {
    color: '#fff',
    fontWeight: 300,
  },
  teamTitleContainer: {
    height: 200,
    marginBottom: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 8,
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    paddingTop: theme.spacing.unit * 8,
  },
});

class Team extends Component {
  getTeam = (id) => {
    /* eslint-disable max-len */
    const teams = {
      design: {
        aboutTitle: 'teams.team[0].about.descriptor',
        bg: 'health',
        color: 'white',
        description: 'teams.team[0].description',
        name: 'teams.team[0].name',
        roles: [{
          description: 'Designers are proficient in creating wireframes, mockups, and demos for user interfaces and experiences. They have bright imaginations and can turn those imaginings into reality.',
          id: 'associate-designer',
          name: 'Associate Designer',
          salary: 65000,
        },
        {
          description: 'Designers are proficient in creating wireframes, mockups, and demos for user interfaces and experiences. They have bright imaginations and can turn those imaginings into reality.',
          id: 'designer',
          name: 'Designer',
          salary: 70000,
        },
        {
          description: 'Senior Designers are technically proficient in coding robust, scalable solutions. They have an advanced understanding of programming languages and paradigms.',
          id: 'senior-designer',
          name: 'Senior Designer',
          salary: 80000,
        },
        {
          description: 'Lead Designers grasp the entirety of a solution, solve technical problems, and are able to teach and relay any necessary information to his or her teammates and managers.',
          id: 'lead-designer',
          name: 'Lead Designer',
          salary: 85000,
        },
        {
          description: 'Principal Designers have vision far and beyond others on his or her team. They can easily switch contexts from low-level to high-level problems and relay that information.',
          id: 'principal-designer',
          name: 'Principal Designer',
          salary: 92500,
        },
        {
          description: 'Design Architects create system architectures that are highly scalable, loosely coupled, and highly cohesive. They can foresee and articulate the technical vision for the business.',
          id: 'design-architect',
          name: 'Design Architect',
          salary: 100000,
        },
        {
          description: 'Senior Design Architects lead and collaborate on the architecture across the breadth of the company and how their area of focus integrates with the rest of the company.',
          id: 'senior-design-architect',
          name: 'Senior Design Architect',
          salary: 110000,
        },
        ],
        slogan: 'teams.team[0].slogan',
      },
      engineering: {
        aboutTitle: 'teams.team[2].about.descriptor',
        bg: 'technology',
        color: 'white',
        description: 'teams.team[2].description',
        name: 'teams.team[2].name',
        roles: [{
          description: 'Software Engineers exhibit knowledge in fundamental coding concepts concerning data structures and algorithms. They have innovative minds and offer efficient solutions.',
          id: 'software-engineer',
          name: 'Software Engineer',
          salary: 85000,
        },
        {
          description: 'Senior Software Engineers are technically proficient in coding robust, scalable solutions. They have an advanced understanding of programming languages and paradigms.',
          id: 'senior-software-engineer',
          name: 'Senior Software Engineer',
          salary: 100000,
        },
        {
          description: 'Lead Software Engineers grasp the entirety of a solution, solve technical problems, and are able to teach and relay any necessary information to his or her teammates and managers.',
          id: 'lead-software-engineer',
          name: 'Lead Software Engineer',
          salary: 110000,
        },
        {
          description: 'Principal Software Engineers have vision far and beyond others on his or her team. They can easily switch contexts from low-level to high-level problems and relay that information.',
          id: 'principal-software-engineer',
          name: 'Principal Software Engineer',
          salary: 120000,
        },
        {
          description: 'Software Architects create system architectures that are highly scalable, loosely coupled, and highly cohesive. They can foresee and articulate the technical vision for the business.',
          id: 'software-architect',
          name: 'Software Architect',
          salary: 150000,
        },
        {
          description: 'Senior Software Architects lead and collaborate on the architecture across the breadth of the company and how their area of focus integrates with the rest of the company.',
          id: 'senior-software-architect',
          name: 'Senior Software Architect',
          salary: 200000,
        },
        ],
        slogan: 'teams.team[2].slogan',
      },
      finance: {
        aboutTitle: 'teams.team[1].about.descriptor',
        bg: 'finance',
        color: 'white',
        description: 'teams.team[1].description',
        name: 'teams.team[1].name',
        slogan: 'teams.team[1].slogan',
      },
      legal: {
        aboutTitle: 'teams.team[3].about.descriptor',
        bg: 'legal',
        color: 'black',
        description: 'teams.team[3].description',
        name: 'teams.team[3].name',
        slogan: 'teams.team[3].slogan',
      },
      marketing: {
        aboutTitle: 'teams.team[4].about.descriptor',
        bg: 'media',
        color: 'white',
        description: 'teams.team[4].description',
        name: 'teams.team[4].name',
        slogan: 'teams.team[4].slogan',
      },
      sales: {
        aboutTitle: 'teams.team[5].about.descriptor',
        bg: 'cosmos',
        color: 'white',
        description: 'teams.team[5].description',
        name: 'teams.team[5].name',
        slogan: 'teams.team[5].slogan',
      },
    };
    /* eslint-enable max-len */

    return teams[id];
  };

  renderRole = (role, key) => {
    const { classes } = this.props;

    return (
      <Grid item key={key} md={3} xs={12}>
        <Card className={classes.teamRoleCard} elevation={0}>
          <CardHeader
            className={classes.teamRoleCardHeader}
            title={role.name}
            titleTypographyProps={{
              className: classes.teamRoleCardHeaderTitle,
              variant: 'subtitle1',
            }}
          />
          <CardContent
            className={classes.teamRoleCardContent}
          >
            <Typography
              className={classes.teamDescriptionText}
              variant='body2'
            >
              {role.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  renderRoles = (roles) => {
    if (!roles) return null;
    return roles.map((role, key) => this.renderRole(role, key));
  };

  render() {
    const { classes, match, theme } = this.props;
    const team = this.getTeam(match.params.teamId);
    const { aboutTitle, bg, color, description, name, slogan } = team;

    return (
      <>
        <main>
          <Grid className={classes.team} container justify='flex-start'>

            <Grid
              className={classes.teamTitleContainer}
              item
              style={{ backgroundColor: theme.palette[bg].main }}
              xs={12}
            >

              <Typography
                align='center'
                className={classes.teamTitle}
                gutterBottom
                style={{ color }}
                variant='h3'
              >
                <FormattedMessage id={name} />
              </Typography>

              <Typography
                align='center'
                className={classes.teamTitle}
                style={{ color }}
                variant='subtitle1'
              >
                <FormattedMessage id={slogan} />
              </Typography>

            </Grid>

            <Grid className={classes.teamDescription} item xs={6}>

              <Typography className={classes.teamDescriptionTitle} variant='h6'>
                <FormattedMessage id={aboutTitle} />
              </Typography>

              <Typography className={classes.teamDescriptionText} variant='body2'>
                <FormattedMessage id={description} />
              </Typography>

              <Button
                color='primary'
                component={Link}
                to={`/careers?team=${name.trim().split(' ')[0].toLowerCase()}`}
                variant='contained'
              >
                <FormattedMessage id='teams.team.button.label' />
              </Button>
            </Grid>

            <Grid className={classes.teamPositions} item xs={12}>
              <Typography className={classes.teamPositionsTitle} variant='h6'>
                <FormattedMessage id='teams.team.roles.descriptor' />
              </Typography>

              <Grid alignItems='center' container justify='flex-start' spacing={24}>
                {this.renderRoles(team.roles)}
              </Grid>

            </Grid>
          </Grid>
        </main>
        <Footer />
      </>
    );
  }
}

Team.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(Team));