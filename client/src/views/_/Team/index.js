import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import withRouter from 'react-router-dom/withRouter';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Footer from 'components/Footer';

import { teams } from './team';

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
          }}/>
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

  renderRoles = () => {
    const { match } = this.props;
    const { roles } = teams[match.params.teamId];

    if (!roles) return null;
    return roles.map((role, key) => this.renderRole(role, key));
  };

  render() {
    const { classes, match, theme } = this.props;
    const {
      bg,
      color,
      description,
      name,
      slogan
    } = teams[match.params.teamId];

    return <>
      <main>
        <Grid
          className={classes.team}
          container
          justify='flex-start'>

          <Grid
            className={classes.teamTitleContainer}
            item
            style={{ backgroundColor: theme.palette[bg] }}
            xs={12}>

            <Typography
              align='center'
              className={classes.teamTitle}
              gutterBottom
              style={{ color }}
              variant='h3'>
              {name}
            </Typography>

            <Typography
              align='center'
              className={classes.teamTitle}
              style={{ color }}
              variant='subtitle1'>
              {slogan}
            </Typography>

          </Grid>

          <Grid
            className={classes.teamDescription}
            item
            xs={6}>

            <Typography
              className={classes.teamDescriptionTitle}
              variant='h6'>
              { `About ${name}`}
            </Typography>

            <Typography
              className={classes.teamDescriptionText}
              variant='body2'>
              {description}
            </Typography>

            <Button
              color='primary'
              component={Link}
              to={`/careers?team=${name.trim().split(' ')[0].toLowerCase()}`}
              variant='contained'>
              See jobs
            </Button>
          </Grid>

          <Grid
            className={classes.teamPositions}
            item
            xs={12}>
            <Typography
              className={classes.teamPositionsTitle}
              variant='h6'>
              Our Roles
            </Typography>

            <Grid alignItems='center' container justify='flex-start' spacing={24}>
              {this.renderRoles()}
            </Grid>

          </Grid>
        </Grid>
      </main>
      <Footer />
    </>;
  }
}

const select = state => ({});

export default withRouter(withStyles(styles, { withTheme: true })(connect(select)(Team)));