import produce from 'immer';

import history from '../../../services/history';

const INITIAL_STATE = {
  resultUsers: [],
  filterUsers_loading: true,
};

export default function filterUsers(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@filterUsers/REQUEST': {
        draft.filterUsers_loading = true;
        break;
      }
      case '@filterUsers/SUCCESS': {
        draft.resultUsers = {
          local: history.location.pathname.split('/')[1],
          users: [...action.payload.users],
          qtd: action.payload.qtd,
        };
        draft.filterUsers_loading = false;
        break;
      }
      case '@filterUsers/FAILURE': {
        draft.filterUsers_loading = false;
        break;
      }
      default:
    }
  });
}
