import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Route from 'react-router-dom/Route';
import Router from 'react-router-dom/BrowserRouter';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import 'common/assets/icons';
import primary from 'common/themes/primary';
import store from 'app/store';

// -- Views --
import Layout from 'views/Layout';

// Fusion _
import About from 'views/_/About';
import Careers from 'views/_/Careers';
import Home from 'views/_/Home';
import Insight from 'views/_/Insight';
import Insights from 'views/_/Insights';

// Admin Dashboard
import Admin from 'views/Admin';

// Fusion Consulting
import ConsultingHome from 'views/Consulting/Home';

// Fusion Technology
import Technology from 'views/Technology';

// Authentication
import Login from 'views/Login';
import Signup from 'views/Signup';

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
              <Route exact path='/insights/:id' component={Insight} />

              <Route exact path='/admin' component={Admin} />

              <Route exact path='/consulting' component={ConsultingHome} />

              <Route exact path='/tech' component={Technology} />

              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
            </Layout>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
