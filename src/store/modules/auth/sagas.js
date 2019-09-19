import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '../../../services/history';
import api from '../../../services/api';

import { singInSuccess } from './actions';

export function* signIn(payload) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessios', {
    email,
    password,
  });

  const { token, user } = response.data;

  yield put(singInSuccess(token, user));

  history.push('/dashboard');
}

export default all([takeLatest('@auth/SING_IN_REQUEST', signIn)]);
