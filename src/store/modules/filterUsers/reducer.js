import produce from 'immer';

import history from '../../../services/history';

const INITIAL_STATE = {
  resultUsers: [],
  loading: true,
};

export default function filterUsers(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@filterUsers/REQUEST': {
        draft.loading = true;
        break;
      }
      case '@filterUsers/SUCCESS': {
        draft.resultUsers = {
          local: history.location.pathname.split('/')[1],
          users: [...action.payload.users],
        };
        draft.loading = false;
        break;
      }
      case '@filterUsers/FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
