import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
