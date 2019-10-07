import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { actionsTeamsSuccess, actionsTeamsFailure } from './actions';

export function* Acting({ payload }) {
  try {
    const { the_action } = payload;

    let url = '';
    let method = '';
    switch (the_action) {
      case 'reset':
        url = 'all';
        method = 'delete';
        break;
      case 'sort':
        url = 'balanceado';
        method = 'post';
        break;
      default:
    }

    const responseAction = yield call(api[method], `team/${url}/`);

    let mensagem = '';
    switch (the_action) {
      case 'reset':
        mensagem = `It has been delete ${responseAction.data.qtd} teams`;
        break;
      case 'sort':
        mensagem = `It has been created ${responseAction.data.qtd} teams`;
        break;
      default:
    }

    yield put(actionsTeamsSuccess(mensagem));
  } catch (err) {
    console.tron.error(err);
    toast.error(
      'Falha ao executar as actions dos times, verifique sua conexão'
    );
    yield put(actionsTeamsFailure());
  }
}

export default all([takeLatest('@actionsTeams/REQUEST', Acting)]);
