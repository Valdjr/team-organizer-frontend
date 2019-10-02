import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { userPerTeamSuccess, userPerTeamFailure } from './actions';

export function* gettingUserPerTeam() {
  try {
    const response = yield call(api.get, 'team/usuariosPorTime');
    const data = [...response.data];
    console.tron.log(data);

    const minTeams = data.reduce((min, p) => {
      return p.numeroDeTimes < min && p.sucesso ? p.numeroDeTimes : min;
    }, data[0].numeroDeTimes);

    const maxTeams = data.reduce((max, p) => {
      return p.numeroDeTimes > max && p.sucesso ? p.numeroDeTimes : max;
    }, data[0].numeroDeTimes);

    console.tron.log(minTeams);
    console.tron.log(maxTeams);

    // yield put(userPerTeamSuccess(users));
  } catch (err) {
    console.tron.error(err);
    toast.error('Falha ao buscar informações, verifique sua conexão');
    yield put(userPerTeamFailure());
  }
}

export default all([takeLatest('@filterUsers/REQUEST', gettingUserPerTeam)]);
