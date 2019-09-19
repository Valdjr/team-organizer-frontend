import { combineReducers } from 'redux';

import auth from './auth/reducer';
import filterUsers from './filterUsers/reducer';

export default combineReducers({ auth, filterUsers });
