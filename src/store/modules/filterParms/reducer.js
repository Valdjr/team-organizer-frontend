import produce from 'immer';
import empty from 'is-empty';

const INITIAL_STATE = {
  filter: '',
  search: '',
  sort: '',
  page: 1,
  needToResetPage: 'first',
};

export default function filterParms(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@filterParms/CHANGE': {
        const { filter, search, sort, page } = action.payload;
        let needToResetPage = false;
        if (
          (draft.filter !== filter ||
            draft.search !== search ||
            draft.sort !== sort) &&
          draft.needToResetPage !== 'first'
        ) {
          needToResetPage = true;
        }
        draft.filter = filter;
        draft.search = search;
        draft.sort = sort;
        draft.page = !empty(page) ? page : 1;
        draft.needToResetPage = needToResetPage;
        break;
      }
      case '@filterParms/RESET': {
        draft.needToResetPage = action.payload;
        break;
      }
      default:
    }
  });
}
