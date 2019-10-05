import produce from 'immer';

import history from '../../../services/history';

const INITIAL_STATE = {
  resultTeams: [],
  filterTeams_loading: true,
};

export default function filterTeams(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@filterTeams/REQUEST': {
        draft.filterTeams_loading = true;
        break;
      }
      case '@filterTeams/SUCCESS': {
        const { teams, scoresTeams, rolesBase } = action.payload;
        draft.resultTeams = {
          local: history.location.pathname.split('/')[1],
          teams,
          scoresTeams,
          rolesBase,
        };
        draft.filterTeams_loading = false;
        break;
      }
      case '@filterTeams/FAILURE': {
        draft.filterTeams_loading = false;
        break;
      }
      default:
    }
  });
}
