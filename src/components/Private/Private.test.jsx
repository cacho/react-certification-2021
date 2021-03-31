import { render, screen } from '@testing-library/react';
import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';

import Private from './Private.component';
import AuthProvider from '../../providers/Auth.provider';

// jest.mock('../../providers/Auth.provider');
// jest.mock('useLocation');

describe('<Private />', () => {
  // beforeEach(() => {
  //   jest.resetAllMocks();
  // });
  test('Redirect unauthenticated users', () => {
    render(
      <AuthProvider>
        <HashRouter>
          <Switch>
            <Private exact path="/">
              <div>test</div>
            </Private>
            <Route path="/restricted-access">
              <div>restricted</div>
            </Route>
          </Switch>
        </HashRouter>
      </AuthProvider>
    );
    expect(screen.getByText(/restricted/i)).toBeInTheDocument();
  });
  test('Redirect authenticated users', () => {
    // render(
    //   <AuthProvider>
    //     <HashRouter>
    //       <Switch>
    //         <Private exact path="/">
    //           <div>test</div>
    //         </Private>
    //         <Route path="/restricted-access">
    //           <div>restricted</div>
    //         </Route>
    //       </Switch>
    //     </HashRouter>
    //   </AuthProvider>
    // );
    // expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});
