import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Route from 'react-router-dom/Route';
import Router from 'react-router-dom/BrowserRouter';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import withStyles from '@material-ui/core/styles/withStyles';


import About1 from 'views/_/About';
import Home1 from 'views/_/Home';

import Layout from 'views/Layout';
import Home from 'views/_Industries';
import AboutUs from 'views/_Industries/AboutUs';
import Careers from 'views/_Industries/Careers';
import Insights from 'views/_Industries/Insights';

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
              <Route exact path='/1' component={Home1} />
              <Route exact path='/about' component={AboutUs} />
              <Route exact path='/about1' component={About1} />
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
