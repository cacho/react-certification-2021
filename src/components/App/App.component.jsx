import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import SearchProvider from '../../providers/Search.provider';
import ThemeProvider from '../../providers/Theme.provider';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <ThemeProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </ThemeProvider>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
