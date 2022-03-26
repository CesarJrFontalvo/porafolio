import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
import AppRouter from './routes/AppRouter';

// import Navbarr from './components/Navbarr';



ReactDOM.render(
  // usar react router dom


  <React.StrictMode>
  
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

