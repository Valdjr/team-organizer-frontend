import { combineReducers } from 'redux';

import auth from './auth/reducer';
import filterUsers from './filterUsers/reducer';
import filterTeams from './filterTeams/reducer';
import userPerTeam from './userPerTeam/reducer';

export default combineReducers({ auth, filterUsers, filterTeams, userPerTeam });
