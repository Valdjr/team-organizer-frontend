import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { userPerTeamSuccess, userPerTeamFailure } from './actions';

export function* gettingUserPerTeam() {
  try {
    const response = yield call(api.get, 'team/usuariosPorTime');
    const data = [...response.data];

    let relative_result = data.filter(p => {
      return p.sucesso === true;
    });

    if (relative_result.length === 0) {
      relative_result = data.filter(p => {
        return p.sucesso === false;
      });
    }

    const possibility = relative_result[0];
    yield put(userPerTeamSuccess(possibility));
  } catch (err) {
    console.tron.error(err);
    toast.error('Falha ao buscar informações, verifique sua conexão');
    yield put(userPerTeamFailure());
  }
}

export default all([takeLatest('@filterUsers/REQUEST', gettingUserPerTeam)]);
