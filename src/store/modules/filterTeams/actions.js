export function filterTeamsRequest(collectionFilters) {
  return {
    type: '@filterTeams/REQUEST',
    payload: collectionFilters,
  };
}

export function filterTeamsSuccess(teams, qtd, scoresTeams, rolesBase) {
  return {
    type: '@filterTeams/SUCCESS',
    payload: { teams, qtd, scoresTeams, rolesBase },
  };
}

export function filterTeamsFailure() {
  return {
    type: '@filterTeams/FAILURE',
  };
}
