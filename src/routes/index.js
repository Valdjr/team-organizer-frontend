import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Teams from '../pages/Teams';
import Settings from '../pages/Settings';

export default function Routes() {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/users" component={Users} isPrivate />
      <Route path="/teams" component={Teams} isPrivate />
      <Route path="/settings" component={Settings} isPrivate />
    </Switch>
  );
}
