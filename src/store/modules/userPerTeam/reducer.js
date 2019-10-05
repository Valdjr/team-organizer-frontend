import produce from 'immer';

const INITIAL_STATE = {
  userPerTeam_loading: true,
  possibilityPerTeam: {},
};

export default function userPerTeam(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@userPerTeam/REQUEST': {
        draft.userPerTeam_loading = true;
        break;
      }
      case '@userPerTeam/SUCCESS': {
        draft.userPerTeam_loading = false;
        draft.possibilityPerTeam = action.payload.possibility;
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
