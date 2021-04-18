import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppNavbar from './components/navbar'
import AdminDashboard from './pages/admin_dashboard';
import Campaign from './pages/campaign';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppNavbar />
      <Switch>
        <Route path="/dashboard" children={<AdminDashboard />} />
        <Route exact path="/campaign/:campaignId" children={<Campaign />} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
