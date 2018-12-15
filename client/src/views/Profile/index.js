import React, { Component } from 'react';
import { connect } from 'react-redux';
import Redirect from 'react-router-dom/Redirect';
import Route from 'react-router-dom/Route';

import Grid from '@material-ui/core/Grid';

import ProfileAdmin from './ProfileAdmin';
import ProfileNotifications from './ProfileNotifications';
import ProfilePost from './ProfilePost';
import ProfilePosts from './ProfilePosts';
import ProfileOverview from './ProfileOverview';
import ProfileSettings from './ProfileSettings';
import ProfileStandard from './ProfileStandard';
import ProfileStandardEdit from './ProfileStandardEdit';
import ProfileStandards from './ProfileStandards';
import ProfileStrategy from './ProfileStrategy';
import ProfileStrategyEdit from './ProfileStrategyEdit';
import ProfileStrategies from './ProfileStrategies';
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
      userType = <ProfileUser />
    }

    return <Grid container style={{ height: '100%' }}>
      { userType }
      <Grid item style={{ flex: 1, overflowY: 'scroll' }}>
        <Route
          exact
          path={ match.path }
          component={ProfileOverview}
        />
        <Route
          exact
          path={`${match.path}/settings`}
          component={ProfileSettings}
        />
        <Route
          exact
          path={`${match.path}/notifications`}
          render={props => {
            return <ProfileNotifications
              notifications={session.user.notifications}
              {...props}
            />
          }}
        />
        <Route
          exact
          path={`${match.path}/post`}
          component={ProfilePost}
        />
        <Route
          exact
          path={`${match.path}/posts`}
          component={ProfilePosts}
        />
        <Route
          exact
          path={`${match.path}/standard`}
          component={ProfileStandard}
        />
        <Route
          exact
          path={`${match.path}/standards/:standardId`}
          component={ProfileStandardEdit}
        />
        <Route
          exact
          path={`${match.path}/standards`}
          component={ProfileStandards}
        />
        <Route
          exact
          path={`${match.path}/strategy`}
          component={ProfileStrategy}
        />
        <Route
          exact
          path={`${match.path}/strategies/:strategyId`}
          component={ProfileStrategyEdit}
        />
        <Route
          exact
          path={`${match.path}/strategies`}
          component={ProfileStrategies}
        />
      </Grid>
    </Grid>;
  }
}

const select = state => ({
  session: state.session,
});

export default connect(select)(Home);