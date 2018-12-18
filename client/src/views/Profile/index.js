import React, { Component } from 'react';
import { connect } from 'react-redux';
import Redirect from 'react-router-dom/Redirect';
import Route from 'react-router-dom/Route';

import Grid from '@material-ui/core/Grid';

import ProfileAdmin from './ProfileAdmin';
import ProfileNotifications from './ProfileNotifications';
import ProfilePost from './ProfilePost';
import ProfilePostEdit from './ProfilePostEdit';
import ProfilePosts from './ProfilePosts';
import ProfileOverview from './ProfileOverview';
import ProfileReport from './ProfileReport';
import ProfileReportEdit from './ProfileReportEdit';
import ProfileReports from './ProfileReports';
import ProfileSettings from './ProfileSettings';
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
        <Route exact path={ match.path } component={ProfileOverview} />
        <Route exact path={`${match.path}/settings`} component={ProfileSettings} />
        <Route exact path={`${match.path}/notifications`}
          render={props => {
            return <ProfileNotifications
              notifications={session.user.notifications}
              {...props} />
          }} />
        <Route exact path={`${match.path}/insights/new`} component={ProfilePost} />
        <Route exact path={`${match.path}/insights/edit/:itemId`} component={ProfilePostEdit} />
        <Route exact path={`${match.path}/insights`} component={ProfilePosts} />
        <Route exact path={`${match.path}/standards/new`}
          render={props => {
            const select = state => ({
              message: state.messages,
              item: state.standards.currentItem,
              items: state.standards.items,
            });
            const Component = connect(select)(ProfileReport);
            return <Component {...props} />;
          }} />
        <Route exact path={`${match.path}/standards/edit/:itemId`}
          render={props => {
            const select = state => ({
              message: state.messages,
              item: state.standards.currentItem,
              items: state.standards.items,
            });
            const Component = connect(select)(ProfileReportEdit);
            return <Component {...props} />;
          }} />
        <Route exact path={`${match.path}/standards`}
          render={props => {
            const select = state => ({
              items: state.standards,
            });
            const Component = connect(select)(ProfileReports);
            return <Component {...props} />;
          }} />
          <Route exact path={`${match.path}/strategies/new`}
            render={props => {
              const select = state => ({
                message: state.messages,
                item: state.strategies.currentItem,
                items: state.strategies.items,
              });
              const Component = connect(select)(ProfileReport);
              return <Component {...props} />;
            }} />
          <Route exact path={`${match.path}/strategies/edit/:itemId`}
            render={props => {
              const select = state => ({
                message: state.messages,
                item: state.strategies.currentItem,
                items: state.strategies.items,
              });
              const Component = connect(select)(ProfileReportEdit);
              return <Component {...props} />;
            }} />
          <Route exact path={`${match.path}/strategies`}
            render={props => {
              const select = state => ({
                items: state.strategies,
              });
              const Component = connect(select)(ProfileReports);
              return <Component {...props} />;
            }} />
      </Grid>
    </Grid>;
  }
}

const select = state => ({
  session: state.session,
});

export default connect(select)(Home);