import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import empty from 'is-empty';

import api from '../../../services/api';

import { filterTeamsSuccess, filterTeamsFailure } from './actions';

export function* filterStarting({ payload }) {
  try {
    const { id, filter, search, withUsers, scoresTeams } = payload;

    const validId = !empty(id) ? `/${id}` : '';
    let URL = `team${validId}?`;
    if (empty(validId)) {
      URL += !empty(filter) ? `&filter=${filter}` : '';
      URL += !empty(search) ? `&search=${search}` : '';
      URL += !empty(withUsers) ? `&withUsers=${withUsers}` : '';
      URL += !empty(scoresTeams) ? '&scoresTeams=true' : '';
    }
    const responseFilter = yield call(api.get, URL);
    const { teams } = responseFilter.data;
    const scores = scoresTeams ? responseFilter.data.scoresTeams : '';
    const rolesBase =
      withUsers === 'roles' ? responseFilter.data.rolesBase : '';

    yield put(filterTeamsSuccess(teams, scores, rolesBase));
  } catch (err) {
    console.tron.error(err);
    toast.error('Falha ao buscar informações dos times, verifique sua conexão');
    yield put(filterTeamsFailure());
  }
}

export default all([takeLatest('@filterTeams/REQUEST', filterStarting)]);
