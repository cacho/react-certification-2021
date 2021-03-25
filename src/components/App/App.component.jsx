import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from '../Layout';
import SearchProvider from '../../providers/Search.provider';
import ThemeProvider from '../../providers/Theme.provider';
import AuthProvider from '../../providers/Auth.provider';
import Routes from '../Routes/Routes.component';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <ThemeProvider>
          <AuthProvider>
            <Layout>
              <Routes />
            </Layout>
          </AuthProvider>
        </ThemeProvider>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
