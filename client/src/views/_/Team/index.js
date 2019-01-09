import React, { Component } from 'react';
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
    color: theme.palette.blue,
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
  teamRoleCardHeader: {
      paddingLeft: 0,
      paddingRight: 0,
  },
  teamRoleCardHeaderTitle: {
    color: theme.palette.blue,
  },
  teamRoleCardContent: {
    paddingLeft: 0,
    paddingRight: 0,
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
    const teams = {
      design: {
        aboutTitle: 'teams.team[0].about.descriptor',
        bg: 'health',
        color: 'white',
        description: 'teams.team[0].description',
        name: 'teams.team[0].name',
        roles: [{
            id: 'associate-designer',
            description: 'Designers are proficient in creating wireframes, mockups, and demos for user interfaces and experiences. They have bright imaginations and can turn those imaginings into reality.',
            name: 'Associate Designer',
            salary: 65000
          },
          {
            id: 'designer',
            description: 'Designers are proficient in creating wireframes, mockups, and demos for user interfaces and experiences. They have bright imaginations and can turn those imaginings into reality.',
            name: 'Designer',
            salary: 70000,
          },
          {
            id: 'senior-designer',
            description: 'Senior Designers are technically proficient in coding robust, scalable solutions. They have an advanced understanding of programming languages and paradigms.',
            name: 'Senior Designer',
            salary: 80000,
          },
          {
            id: 'lead-designer',
            description: 'Lead Designers grasp the entirety of a solution, solve technical problems, and are able to teach and relay any necessary information to his or her teammates and managers.',
            name: 'Lead Designer',
            salary: 85000,
          },
          {
            id: 'principal-designer',
            description: 'Principal Designers have vision far and beyond others on his or her team. They can easily switch contexts from low-level to high-level problems and relay that information.',
            name: 'Principal Designer',
            salary: 92500,
          },
          {
            id: 'design-architect',
            description: 'Design Architects create system architectures that are highly scalable, loosely coupled, and highly cohesive. They can foresee and articulate the technical vision for the business.',
            name: 'Design Architect',
            salary: 100000
          },
          {
            id: 'senior-design-architect',
            description: 'Senior Design Architects lead and collaborate on the architecture across the breadth of the company and how their area of focus integrates with the rest of the company.',
            name: 'Senior Design Architect',
            salary: 110000
          },
        ],
        slogan: 'teams.team[0].slogan'
      },
      finance: {
        aboutTitle: 'teams.team[1].about.descriptor',
        bg: 'finance',
        color: 'white',
        description: 'teams.team[1].description',
        name: 'teams.team[1].name',
        slogan: 'teams.team[1].slogan',
      },
      engineering: {
        aboutTitle: 'teams.team[2].about.descriptor',
        bg: 'technology',
        color: 'white',
        description: 'teams.team[2].description',
        name: 'teams.team[2].name',
        roles: [{
            id: 'software-engineer',
            description: 'Software Engineers exhibit knowledge in fundamental coding concepts concerning data structures and algorithms. They have innovative minds and offer efficient solutions.',
            name: 'Software Engineer',
            salary: 85000,
          },
          {
            id: 'senior-software-engineer',
            description: 'Senior Software Engineers are technically proficient in coding robust, scalable solutions. They have an advanced understanding of programming languages and paradigms.',
            name: 'Senior Software Engineer',
            salary: 100000,
          },
          {
            id: 'lead-software-engineer',
            description: 'Lead Software Engineers grasp the entirety of a solution, solve technical problems, and are able to teach and relay any necessary information to his or her teammates and managers.',
            name: 'Lead Software Engineer',
            salary: 110000,
          },
          {
            id: 'principal-software-engineer',
            description: 'Principal Software Engineers have vision far and beyond others on his or her team. They can easily switch contexts from low-level to high-level problems and relay that information.',
            name: 'Principal Software Engineer',
            salary: 120000,
          },
          {
            id: 'software-architect',
            description: 'Software Architects create system architectures that are highly scalable, loosely coupled, and highly cohesive. They can foresee and articulate the technical vision for the business.',
            name: 'Software Architect',
            salary: 150000,
          },
          {
            id: 'senior-software-architect',
            description: 'Senior Software Architects lead and collaborate on the architecture across the breadth of the company and how their area of focus integrates with the rest of the company.',
            name: 'Senior Software Architect',
            salary: 200000,
          },
        ],
        slogan: 'teams.team[2].slogan',
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

    return teams[id];
  };

  renderRole = (role, key) => {
    const { classes } = this.props;

    return <Grid item key={key} md={3} xs={12}>
      <Card className={classes.teamRoleCard} elevation={0}>
        <CardHeader
          className={classes.teamRoleCardHeader}
          title={role.name}
          titleTypographyProps={{
            className: classes.teamRoleCardHeaderTitle,
            variant: 'subtitle1'
          }} />
        <CardContent
          className={classes.teamRoleCardContent}>
          <Typography
            className={classes.teamDescriptionText}
            variant='body2'>
            {role.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>;
  };

  renderRoles = (roles) => {
    if (!roles) return null;
    return roles.map((role, key) => this.renderRole(role, key));
  };

  render() {
    const { classes, match, theme } = this.props;
    const team = this.getTeam(match.params.teamId);
    const { aboutTitle, bg, color, description, name, slogan } = team;

    return <>
      <main>
        <Grid
          className={classes.team}
          container
          justify='flex-start'>

          <Grid
            className={classes.teamTitleContainer}
            item
            style={{ backgroundColor: theme.palette[bg].main }}
            xs={12}>

            <Typography
              align='center'
              className={classes.teamTitle}
              gutterBottom
              style={{ color }}
              variant='h3'>
              <FormattedMessage id={name} />
            </Typography>

            <Typography
              align='center'
              className={classes.teamTitle}
              style={{ color }}
              variant='subtitle1'>
              <FormattedMessage id={slogan} />
            </Typography>

          </Grid>

          <Grid
            className={classes.teamDescription}
            item
            xs={6}>

            <Typography
              className={classes.teamDescriptionTitle}
              variant='h6'>
              <FormattedMessage id={aboutTitle} />
            </Typography>

            <Typography
              className={classes.teamDescriptionText}
              variant='body2'>
              <FormattedMessage id={description} />
            </Typography>

            <Button
              color='primary'
              component={Link}
              to={`/careers?team=${name.trim().split(' ')[0].toLowerCase()}`}
              variant='contained'>
              <FormattedMessage id='teams.team.button.label' />
            </Button>
          </Grid>

          <Grid
            className={classes.teamPositions}
            item
            xs={12}>
            <Typography
              className={classes.teamPositionsTitle}
              variant='h6'>
              <FormattedMessage id='teams.team.roles.descriptor' />
            </Typography>

            <Grid alignItems='center' container justify='flex-start' spacing={24}>
              {this.renderRoles(team.roles)}
            </Grid>

          </Grid>
        </Grid>
      </main>
      <Footer />
    </>;
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(Team));