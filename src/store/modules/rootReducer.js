import { combineReducers } from 'redux';

import actionsTeams from './actionsTeams/reducer';
import auth from './auth/reducer';
import filterUsers from './filterUsers/reducer';
import filterTeams from './filterTeams/reducer';
import userPerTeam from './userPerTeam/reducer';
import filterParms from './filterParms/reducer';

export default combineReducers({
  auth,
  filterUsers,
  filterTeams,
  actionsTeams,
  userPerTeam,
  filterParms,
});
