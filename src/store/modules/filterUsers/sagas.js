import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import empty from 'is-empty';

import api from '../../../services/api';

import { filterUsersSuccess, filterUsersFailure } from './actions';

export function* filterUsers({ payload }) {
  try {
    const { id, filter, search, sort } = payload;

    const validId = !empty(id) ? `/${id}` : '';
    let URL = `users${validId}?`;
    if (empty(validId)) {
      URL += !empty(filter) ? `&filter=${filter}` : '';
      URL += !empty(search) ? `&search=${search}` : '';
      URL += !empty(sort) ? `&sort=${sort}` : '';
    }
    const responseFilter = yield call(api.get, URL);
    const users = [...responseFilter.data];

    yield put(filterUsersSuccess(users));
  } catch (err) {
    console.tron.error(err);
    toast.error('Falha ao buscar informações, verifique sua conexão');
    yield put(filterUsersFailure());
  }
}

export default all([takeLatest('@filterUsers/REQUEST', filterUsers)]);
