import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import Private from './Private.component';
import AuthProvider from '../../providers/Auth.provider';

// jest.mock('../../providers/Auth.provider');
// jest.mock('useLocation');

describe('<Private />', () => {
  // beforeEach(() => {
  //   jest.resetAllMocks();
  // });
  test('Renders authenticated', () => {
    // const history = createMemoryHistory();
    // render(
    //   <AuthProvider {...{ authenticated: true }}>
    //     <Router history={history}>
    //       <Switch>
    //         <Private exact path="/">
    //           <div>test</div>
    //         </Private>
    //         <Route path="/restricted-access">
    //           <div>restricted</div>
    //         </Route>
    //       </Switch>
    //     </Router>
    //   </AuthProvider>
    // );
    // expect(screen.getByText(/start/i)).toBeInTheDocument();
  });
});
