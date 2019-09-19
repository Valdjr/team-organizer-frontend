import produce from 'immer';

const INITIAL_STATE = {
  users: [],
  loading: false,
};

export default function filterUsers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@filterUsers/SUCCESS':
      return produce(state, draft => {
        draft.users = action.payload.users;
      });
    default:
      return state;
  }
}
