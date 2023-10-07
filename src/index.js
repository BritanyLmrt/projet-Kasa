// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './route'; 
import './styles/css/style.css';


const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    {/* <Header /> */}
    <Router>
      <AppRoutes />
    </Router>
  </React.StrictMode>
);

