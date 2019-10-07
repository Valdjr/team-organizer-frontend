export function filterUsersRequest(collectionFilters) {
  return {
    type: '@filterUsers/REQUEST',
    payload: collectionFilters,
  };
}

export function filterUsersSuccess(users, qtd) {
  return {
    type: '@filterUsers/SUCCESS',
    payload: { users, qtd },
  };
}

export function filterUsersFailure() {
  return {
    type: '@filterUsers/FAILURE',
  };
}
