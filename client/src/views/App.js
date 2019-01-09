import React from 'react';
import { Provider } from 'react-redux';
import Redirect from 'react-router-dom/Redirect';
import Route from 'react-router-dom/Route';
import Router from 'react-router-dom/BrowserRouter';
import Switch from 'react-router-dom/Switch';

import { IntlProvider } from 'react-intl';
import i8n from '../i8n';

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

// Maintenance
import Landing from 'views/Landing';

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
        <MuiThemeProvider theme={ primary }>
          <Router>
            <Scroll>
              <Route
                render={({ location }) => {
                  return <Layout>
                    <Fade
                      key={location.pathname.split('/')[0]}
                      in
                      style={{ height: '100%' }}
                      timeout={400}>
                      <div>
                        <Switch location={location}>
                          <Route exact path='/' component={CompanyHome} />
                          <Route exact path='/about' component={About} />
                          <Route exact path='/about/orgs' render={() => (
                            <Redirect to='/about/organizations' />
                          )} />
                          <Route exact path='/about/organizations' component={Organizations} />
                          <Route exact path='/standard' component={Standard} />
                          <Route exact path='/strategy' component={Strategy} />
                          <Route exact path='/careers' component={Careers} />
                          <Route exact path='/careers/:careerId' component={Career} />
                          <Route exact path='/contact' component={Contact} />
                          <Route exact path='/insights' component={Insights} />
                          <Route exact path='/insights/:insightId' component={Insight} />
                          <Route exact path='/teams/:teamId' component={Team} />

                          <Route exact path='/company/cookies' component={Cookies} />
                          <Route exact path='/company/privacy' component={PrivacyPolicy} />
                          <Route exact path='/company/sitemap' component={SiteMap} />
                          <Route exact path='/company/terms-of-use' component={TermsOfUse} />

                          <Route path='/profile' component={Profile} />

                          <Route exact path='/consulting' component={ConsultingHome} />
                          <Route exact path='/consulting/services' component={ConsultingServices} />
                          <Route exact path='/consulting/solutions' component={ConsultingSolutions} />

                          <Route exact path='/tech' render={() => <Redirect to='/technology' />} />
                          <Route exact path='/technology' component={TechnologyHome} />
                          <Route exact path='/technology/products' component={TechnologyProducts} />

                          <Route exact path='/ai' component={Landing} />
                          <Route exact path='/cosmos' component={Landing} />
                          <Route exact path='/energy' component={Landing} />
                          <Route exact path='/finance' component={Landing} />
                          <Route exact path='/health' component={Landing} />
                          <Route exact path='/legal' component={Landing} />
                          <Route exact path='/media' component={Landing} />
                          <Route exact path='/transport' component={Landing} />

                          <Route exact path='/login' component={Login} />
                          <Route exact path='/signup' component={Signup} />

                          <Route component={NotFound} />
                        </Switch>
                      </div>
                    </Fade>
                  </Layout>
                }} />
            </Scroll>
          </Router>
        </MuiThemeProvider>
      </Provider>
    </IntlProvider>
  );
}

export default App;
