import React, { Component } from 'react';
import { connect } from 'react-redux';
import Redirect from 'react-router-dom/Redirect';
import Route from 'react-router-dom/Route';

import Grid from '@material-ui/core/Grid';

import ProfileAdmin from './ProfileAdmin';
import ProfileCareer from './ProfileCareer';
import ProfileCareers from './ProfileCareers';
import ProfileInsight from './ProfileInsight';
import ProfileInsights from './ProfileInsights';
import ProfileNotifications from './ProfileNotifications';
import ProfileOverview from './ProfileOverview';
import ProfileSettings from './ProfileSettings';
import ProfileStandard from './ProfileStandard';
import ProfileStandards from './ProfileStandards';
import ProfileStrategies from './ProfileStrategies';
import ProfileStrategy from './ProfileStrategy';
import ProfileUser from './ProfileUser';

class Home extends Component {
  render() {
    const { match, session } = this.props;

    let userType = null;

    if ( !session.auth ) {
      return <Redirect to='/login' />;
    } else if ( session.user.role === 'admin' ) {
      userType = <ProfileAdmin session={ session } />;
    } else {
      userType = <ProfileUser />;
    }

    return <Grid container style={{ height: '100%' }}>
      { userType }
      <Grid item style={{ flex: 1, overflowY: 'scroll' }}>
        <Route exact path={ match.path } component={ProfileOverview} />
        <Route exact path={`${match.path}/settings`} component={ProfileSettings} />
        <Route exact path={`${match.path}/notifications`} component={ProfileNotifications} />
        <Route exact path={`${match.path}/careers/new`} component={ProfileCareer} />
        <Route exact path={`${match.path}/careers/edit/:itemId`} component={ProfileCareer} />
        <Route exact path={`${match.path}/careers`} component={ProfileCareers} />
        <Route exact path={`${match.path}/insights/new`} component={ProfileInsight} />
        <Route exact path={`${match.path}/insights/edit/:itemId`} component={ProfileInsight} />
        <Route exact path={`${match.path}/insights`} component={ProfileInsights} />
        <Route exact path={`${match.path}/standards/new`} component={ProfileStandard}/>
        <Route exact path={`${match.path}/standards/edit/:itemId`} component={ProfileStandard} />
        <Route exact path={`${match.path}/standards`} component={ProfileStandards} />
        <Route exact path={`${match.path}/strategies/new`} component={ProfileStrategy} />
        <Route exact path={`${match.path}/strategies/edit/:itemId`} component={ProfileStrategy} />
        <Route exact path={`${match.path}/strategies`} component={ProfileStrategies} />
      </Grid>
    </Grid>;
  }
}

const select = state => ({
  session: state.session,
});

export default connect(select)(Home);