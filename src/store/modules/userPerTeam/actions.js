export function userPerTeamRequest() {
  return {
    type: '@userPerTeam/REQUEST',
    payload: {},
  };
}

export function userPerTeamSuccess(possibility) {
  return {
    type: '@userPerTeam/SUCCESS',
    payload: { possibility },
  };
}

export function userPerTeamFailure() {
  return {
    type: '@userPerTeam/FAILURE',
  };
}
