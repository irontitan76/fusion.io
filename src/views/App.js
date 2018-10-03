import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Route from 'react-router-dom/Route';
import Router from 'react-router-dom/BrowserRouter';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import withStyles from '@material-ui/core/styles/withStyles';

import About from 'views/_/About';
import Careers from 'views/_/Careers';
import Home from 'views/_/Home';
import Insights from 'views/_/Insights';

import Layout from 'views/Layout';
import Consulting from 'views/Consulting';
import Technology from 'views/Technology';

import 'common/assets/icons';
import primary from 'common/themes/primary';
import store from 'app/store';

const styles = theme => ({});

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={ primary }>
          <Router>
            <Layout>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/careers' component={Careers} />
              <Route exact path='/insights' component={Insights} />

              <Route exact path='/consulting' component={Consulting} />

              <Route exact path='/tech' component={Technology} />
            </Layout>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
