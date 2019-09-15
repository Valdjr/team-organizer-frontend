import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Users from '../pages/Users';
import Teams from '../pages/Teams';

export default function Routes() {
  return (
    <Switch>
      <Route path="/users" component={Users} />
      <Route path="/teams" component={Teams} />
    </Switch>
  );
}
