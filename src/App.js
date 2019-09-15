import 'dotenv/config';
import { Router } from 'react-router-dom';
import React from 'react';

import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
