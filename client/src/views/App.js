/* eslint-disable max-len */
import React from 'react';
import { Provider } from 'react-redux';
import Redirect from 'react-router-dom/Redirect';
import Route from 'react-router-dom/Route';
import Router from 'react-router-dom/BrowserRouter';
import Switch from 'react-router-dom/Switch';

import { IntlProvider } from 'react-intl';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Fade from '@material-ui/core/Fade';
import Scroll from 'components/Scroll';

import 'common/assets/icons';
import primary from 'common/themes/primary';
import store from 'app/store';

// -- Views --
import Layout from 'views/Layout';
import NotFound from 'views/NotFound';

// Fusion _
import About from 'views/_/About';
import Career from 'views/_/Career';
import Careers from 'views/_/Careers';
import CompanyHome from 'views/_/Home';
import Contact from 'views/_/Contact';
import Insight from 'views/_/Insight';
import Insights from 'views/_/Insights';
import Organizations from 'views/_/Organizations';
import Standard from 'views/_/Standard';
import Strategy from 'views/_/Strategy';
import Team from 'views/_/Team';

// Profile Dashboard
import Profile from 'views/Profile';

// Fusion Consulting
import ConsultingHome from 'views/Consulting/Home';
import ConsultingServices from 'views/Consulting/Services';
import ConsultingSolutions from 'views/Consulting/Solutions';

// Fusion Technology
import TechnologyHome from 'views/Technology/Home';
import TechnologyProducts from 'views/Technology/Products';

// Authentication
import Login from 'views/Login';
import Signup from 'views/Signup';

// Policies
import Cookies from 'views/Policy/cookies';
import PrivacyPolicy from 'views/Policy/Privacy2';
import SiteMap from 'views/Policy/sitemap';
import TermsOfUse from 'views/Policy/terms';

import Demo from 'views/Demo';

// Maintenance
import Landing from 'views/Landing';
import i8n from '../i8n';

const supportedLocales = ['en', 'en-US'];
let locale = navigator.language;
if (supportedLocales.indexOf(locale) === -1) {
  locale = 'en';
}

const getMessages = (locale) => i8n[locale];
const intlConfig = {
  defaultLocale: locale,
  locale,
  messages: getMessages(locale),
  textComponent: React.Fragment,
};

const App = () => {
  return (
    <IntlProvider {...intlConfig}>
      <Provider store={store}>
        <MuiThemeProvider theme={primary}>
          <Router>
            <Scroll>
              <Route
                render={({ location }) => {
                  return (
                    <Layout>
                      <Fade
                        in
                        key={location.pathname.split('/')[0]}
                        style={{ height: '100%' }}
                        timeout={400}
                      >
                        <div>
                          <Switch location={location}>
                            <Route component={CompanyHome} exact path='/' />
                            <Route component={About} exact path='/about' />
                            <Route
                              exact
                              path='/about/orgs'
                              render={() => (
                                <Redirect to='/about/organizations' />
                              )}
                            />
                            <Route component={Organizations} exact path='/about/organizations' />
                            <Route component={Standard} exact path='/standard' />
                            <Route component={Strategy} exact path='/strategy' />
                            <Route component={Careers} exact path='/careers' />
                            <Route component={Career} exact path='/careers/:careerId' />
                            <Route component={Contact} exact path='/contact' />
                            <Route component={Insights} exact path='/insights' />
                            <Route component={Insight} exact path='/insights/:insightId' />
                            <Route component={Team} exact path='/teams/:teamId' />

                            <Route component={Cookies} exact path='/company/cookies' />
                            <Route component={PrivacyPolicy} exact path='/company/privacy' />
                            <Route component={SiteMap} exact path='/company/sitemap' />
                            <Route component={TermsOfUse} exact path='/company/terms-of-use' />

                            <Route component={Profile} path='/profile' />

                            <Route component={ConsultingHome} exact path='/consulting' />
                            <Route component={ConsultingServices} exact path='/consulting/services' />
                            <Route component={ConsultingSolutions} exact path='/consulting/solutions' />

                            <Route exact path='/tech' render={() => <Redirect to='/technology' />} />
                            <Route component={TechnologyHome} exact path='/technology' />
                            <Route component={TechnologyProducts} exact path='/technology/products' />

                            <Route component={Landing} exact path='/ai' />
                            <Route component={Landing} exact path='/cosmos' />
                            <Route component={Landing} exact path='/energy' />
                            <Route component={Landing} exact path='/finance' />
                            <Route component={Landing} exact path='/health' />
                            <Route component={Landing} exact path='/legal' />
                            <Route component={Landing} exact path='/media' />
                            <Route component={Landing} exact path='/transport' />

                            <Route component={Login} exact path='/login' />
                            <Route component={Signup} exact path='/signup' />

                            <Route component={Demo} exact path='/demo' />

                            <Route component={NotFound} />
                          </Switch>
                        </div>
                      </Fade>
                    </Layout>
                  );
                }}
              />
            </Scroll>
          </Router>
        </MuiThemeProvider>
      </Provider>
    </IntlProvider>
  );
};

export default App;
