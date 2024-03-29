import { all } from 'redux-saga/effects';

import actionsTeams from './actionsTeams/sagas';
import auth from './auth/sagas';
import filterUsers from './filterUsers/sagas';
import filterTeams from './filterTeams/sagas';
import userPerTeam from './userPerTeam/sagas';

export default function* rootSaga() {
  return yield all([auth, filterUsers, filterTeams, actionsTeams, userPerTeam]);
}
