export function actionsTeamsRequest(the_action) {
  return {
    type: '@actionsTeams/REQUEST',
    payload: { the_action },
  };
}

export function actionsTeamsSuccess(mensagem) {
  return {
    type: '@actionsTeams/SUCCESS',
    payload: { mensagem },
  };
}

export function actionsTeamsFailure() {
  return {
    type: '@actionsTeams/FAILURE',
  };
}
