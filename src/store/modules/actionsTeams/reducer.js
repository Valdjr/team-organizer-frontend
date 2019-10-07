import produce from 'immer';

const INITIAL_STATE = {
  actionMensagem: '',
  actionsTeams_loading: false,
};

export default function actionsTeams(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@actionsTeams/REQUEST': {
        draft.actionMensagem = '';
        draft.actionsTeams_loading = true;
        break;
      }
      case '@actionsTeams/SUCCESS': {
        draft.actionMensagem = action.payload.mensagem;
        draft.actionsTeams_loading = false;
        break;
      }
      case '@actionsTeams/FAILURE': {
        draft.actionMensagem = '';
        draft.actionsTeams_loading = false;
        break;
      }
      default:
    }
  });
}
