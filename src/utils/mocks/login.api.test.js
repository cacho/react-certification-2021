// import React from 'react';
// import { render } from '@testing-library/react';
// import PortalModal from './PortalModal.component';
import loginAPI from './login.api';

describe('LoginAPI mockup', () => {
  test('Resolve promise', async () => {
    await loginAPI('wizeline', 'Rocks!').then((response) => {
      expect(response.name).toEqual('Wizeline');
    });
  });
  test('Reject promise', async () => {
    try {
      await loginAPI('wizelino', 'Rocks');
    } catch (e) {
      expect(e.message).toEqual('Username or password invalid');
    }
  });
});
