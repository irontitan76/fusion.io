import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Redirect from 'react-router-dom/Redirect';
import Route from 'react-router-dom/Route';

import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import ProfileAdmin from './ProfileAdmin';
import ProfileCareer from './ProfileCareer';
import ProfileCareers from './ProfileCareers';
import ProfileInsight from './ProfileInsight';
import ProfileInsights from './ProfileInsights';
import ProfileNotifications from './ProfileNotifications';
import ProfileOverview from './ProfileOverview';
import ProfilePolicies from './ProfilePolicies';
import ProfilePolicy from './ProfilePolicy';
import ProfileSettings from './ProfileSettings';
import ProfileStandard from './ProfileStandard';
import ProfileStandards from './ProfileStandards';
import ProfileStrategies from './ProfileStrategies';
import ProfileStrategy from './ProfileStrategy';
import ProfileUser from './ProfileUser';

const styles = theme => {
  const { palette } = theme;

  return {
    root: {
      backgroundColor: palette.background.default,
      height: '100%',
    },
  };
};

class Home extends Component {
  renderRoutes = () => {
    const { match } = this.props;

    return (
      <>
        <Route component={ProfileOverview} exact path={match.path} />
        <Route component={ProfileSettings} exact path={`${match.path}/settings`} />
        <Route component={ProfileNotifications} exact path={`${match.path}/notifications`} />
        <Route component={ProfileCareer} exact path={`${match.path}/careers/new`}  />
        <Route component={ProfileCareer} exact path={`${match.path}/careers/edit/:itemId`}  />
        <Route component={ProfileCareers} exact path={`${match.path}/careers`} />
        <Route component={ProfileInsight} exact path={`${match.path}/insights/new`} />
        <Route component={ProfileInsight} exact path={`${match.path}/insights/edit/:itemId`} />
        <Route component={ProfileInsights} exact path={`${match.path}/insights`} />
        <Route component={ProfilePolicies} exact path={`${match.path}/policies`} />
        <Route component={ProfilePolicy} exact path={`${match.path}/policies/new`} />
        <Route component={ProfilePolicy} exact path={`${match.path}/policies/edit/:itemId`} />
        <Route component={ProfileStandard} exact path={`${match.path}/standards/new`} />
        <Route component={ProfileStandard} exact path={`${match.path}/standards/edit/:itemId`} />
        <Route component={ProfileStandards} exact path={`${match.path}/standards`} />
        <Route component={ProfileStrategy} exact path={`${match.path}/strategies/new`} />
        <Route component={ProfileStrategy} exact path={`${match.path}/strategies/edit/:itemId`} />
        <Route component={ProfileStrategies} exact path={`${match.path}/strategies`} />
      </>
    );
  };

  render() {
    const { classes, session } = this.props;

    let userType = null;

    if (!session.auth) {
      return <Redirect to='/login' />;
    }

    if (session.user.role === 'admin') {
      userType = <ProfileAdmin session={session} />;
    } else {
      userType = <ProfileUser />;
    }

    return (
      <Grid className={classes.root} container>
        {userType}
        <Grid item style={{ flex: 1, overflowY: 'scroll' }}>
          {this.renderRoutes()}
        </Grid>
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
  session: PropTypes.shape({}).isRequired,
};

const select = state => ({
  session: state.session,
});

export default withStyles(styles)(connect(select)(Home));