import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Private from '../Private/Private.component';
import FavoritesPage from '../../pages/Favorites';
import LoginPage from '../../pages/Login';
import RestrictedAccessWarning from '../../pages/RestrictedAccessWarning';

function Routes() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <>
      <Switch location={background || location}>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Private exact path="/favorites">
          <FavoritesPage />
        </Private>
        <Route path="/login" component={LoginPage} />
        <Route path="/restricted-access">
          <RestrictedAccessWarning />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      {background && <Route path="/login" component={LoginPage} />}
    </>
  );
}

export default Routes;
