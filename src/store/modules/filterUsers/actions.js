export function filterUsersRequest(filter, search, sort) {
  return {
    type: '@filterUsers/REQUEST',
    payload: { filter, search, sort },
  };
}

export function filterUsersSuccess(users) {
  return {
    type: '@filterUsers/SUCCESS',
    payload: { users },
  };
}

export function filterUsersFailure() {
  return {
    type: '@filterUsers/FAILURE',
  };
}
