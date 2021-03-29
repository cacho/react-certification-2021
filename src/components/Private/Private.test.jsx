// import React from 'react';
// import { render } from '@testing-library/react';
// // import PortalModal from './PortalModal.component';
// import { Route, Redirect } from 'react-router-dom';
// import useAuth from '../../providers/Auth.provider';
// import Private from './Private.component';
// import AuthProvider from '../../providers/Auth.provider';

// jest.mock('../../providers/Auth.provider');
// jest.mock('react-router-dom');

// describe('<Private />', () => {
//   beforeEach(() => {
//     jest.resetAllMocks();
//   });
// test('Renders authenticated', () => {
//   useAuth.mockReturnValue({ authenthicated: true });
//   const { getByTestId } = render(
//     <AuthProvider>
//       <Private>
//         <div data-testid="filli">Autorized user</div>
//       </Private>
//     </AuthProvider>
//   );
//   expect(getByTestId('filli')).not.toBe(null);
// });
// });
