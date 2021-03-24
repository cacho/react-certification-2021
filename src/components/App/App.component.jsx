import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import SearchProvider from '../../providers/Search.provider';
import ThemeProvider from '../../providers/Theme.provider';
import AuthProvider from '../../providers/Auth.provider';
import Private from '../Private/Private.component';
import FavoritesPage from '../../pages/Favorites';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <ThemeProvider>
          <AuthProvider>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Private exact path="/favorites">
                  <FavoritesPage />
                </Private>
                <Route exact path="/favoritos">
                  <FavoritesPage />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </AuthProvider>
        </ThemeProvider>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
