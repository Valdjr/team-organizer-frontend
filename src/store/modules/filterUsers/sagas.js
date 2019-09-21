import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { filterUsersSuccess } from './actions';

export function* filterUsers({ payload }) {
  const { filter, search, sort } = payload;

  const responseFilter = yield call(
    api.get,
    `/users?filter=${filter}&search=${search}&sort=${sort}`
  );
  const users = [...responseFilter.data];
  console.tron.log(users);

  yield put(filterUsersSuccess(users));
}

export default all([takeLatest('@filterUsers/REQUEST', filterUsers)]);
