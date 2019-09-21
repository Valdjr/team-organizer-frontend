import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { filterUsersSuccess, filterUsersFailure } from './actions';

export function* filterUsers({ payload }) {
  try {
    const { id, filter, search, sort } = payload;

    const validId = id.length > 0 ? `/${id}` : '';
    const responseFilter = yield call(
      api.get,
      `/users${validId}?filter=${filter}&search=${search}&sort=${sort}`
    );
    const users = [...responseFilter.data];

    yield put(filterUsersSuccess(users));
  } catch (err) {
    toast.error('Falha ao buscar informações, verifique sua conexão');
    yield put(filterUsersFailure());
  }
}

export default all([takeLatest('@filterUsers/REQUEST', filterUsers)]);
