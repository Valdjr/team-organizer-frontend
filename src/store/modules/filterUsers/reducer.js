import produce from 'immer';

const INITIAL_STATE = {
  users: [],
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
        draft.users = action.payload.users;
        draft.loading = false;
        break;
      }
      case '@filterUsers/FAILURE': {
        draft.users = action.payload.users;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
