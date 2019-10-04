import produce from 'immer';

const INITIAL_STATE = {
  resultUserPerTeam: [],
  userPerTeam_loading: true,
};

export default function userPerTeam(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@userPerTeam/REQUEST': {
        draft.userPerTeam_loading = true;
        break;
      }
      case '@userPerTeam/SUCCESS': {
        draft.resultUsers = [];
        draft.userPerTeam_loading = false;
        break;
      }
      case '@userPerTeam/FAILURE': {
        draft.userPerTeam_loading = false;
        break;
      }
      default:
    }
  });
}
