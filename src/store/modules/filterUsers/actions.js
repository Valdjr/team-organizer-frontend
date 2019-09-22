export function filterUsersRequest(collectionFilters) {
  return {
    type: '@filterUsers/REQUEST',
    payload: collectionFilters,
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
