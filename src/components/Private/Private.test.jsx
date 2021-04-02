import { render } from '@testing-library/react';
import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';

import Private from './Private.component';
import { useAuth } from '../../providers/Auth.provider';

jest.mock('../../providers/Auth.provider');

describe('<Private />', () => {
  test('Redirect authenticated users', () => {
    useAuth.mockReturnValue({
      state: { authenticated: true },
      dispatch: jest.fn(),
    });

    const { getByText } = render(
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
    );

    expect(getByText(/test/i)).toBeInTheDocument();
  });
  test('Redirect unauthenticated users', () => {
    useAuth.mockReturnValue({
      state: { authenticated: false },
      dispatch: jest.fn(),
    });
    const { getByText } = render(
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
    );
    expect(getByText(/restricted/i)).toBeInTheDocument();
  });
});
