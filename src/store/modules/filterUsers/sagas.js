import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import empty from 'is-empty';

import api from '../../../services/api';

import { filterUsersSuccess, filterUsersFailure } from './actions';

export function* filterStarting({ payload }) {
  try {
    const { id, page, filter, search, sort } = payload;

    const validId = !empty(id) ? `/${id}` : '';
    const validPage = !empty(page) ? `page=${page}&limit=${30}` : '';
    let URL = `users${validId}?${validPage}`;
    if (empty(validId)) {
      URL += !empty(filter) ? `&filter=${filter}` : '';
      URL += !empty(search) ? `&search=${search}` : '';
      URL += !empty(sort) ? `&sort=${sort}` : '';
    }
    const responseFilter = yield call(api.get, URL);
    const users = [...responseFilter.data.users];
    const { qtd } = responseFilter.data;

    yield put(filterUsersSuccess(users, qtd));
  } catch (err) {
    console.tron.error(err);
    toast.error(
      'Falha ao buscar informações do usuário, verifique sua conexão'
    );
    yield put(filterUsersFailure());
  }
}

export default all([takeLatest('@filterUsers/REQUEST', filterStarting)]);
