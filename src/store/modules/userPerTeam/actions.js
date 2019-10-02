export function userPerTeamRequest() {
  return {
    type: '@userPerTeam/REQUEST',
    payload: {},
  };
}

export function userPerTeamSuccess() {
  return {
    type: '@userPerTeam/SUCCESS',
    payload: {},
  };
}

export function userPerTeamFailure() {
  return {
    type: '@userPerTeam/FAILURE',
  };
}
