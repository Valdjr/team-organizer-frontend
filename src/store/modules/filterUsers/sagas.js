import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { filterUsersSuccess } from './actions';

export function* filterUsers({ payload }) {
  const { filter, search, sort } = payload;

  const thisFilter =
    search.length > 0 && filter !== 'role'
      ? `${filter}_like=^${search.trim()}`
      : '';
  const thisExp = sort === 'exp' ? `&_sort=exp&_order=asc` : '';
  const responseFilter = yield call(api.get, `users?${thisFilter}${thisExp}`);
  let users = [...responseFilter.data];

  const responseSort = yield call(api.get, 'roles?_sort=name');
  let roles = [...responseSort.data];

  users = users.filter(user => {
    user.role_name = roles
      .find(role => user.role_id === role.id)
      .name.toUpperCase();
    return user;
  });

  if (sort === 'roles') {
    roles = roles.filter(role => {
      role.name = role.name.toUpperCase();
      role.users = users.filter(user => {
        return user.role_id === role.id;
      });
      return role.users.length > 0;
    });

    users = roles;
  } else if (sort === 'exp') {
    let exp = users.map(user => {
      return user.exp;
    });
    exp = exp.filter((expr, pos) => {
      return exp.indexOf(expr) === pos;
    });

    exp = exp.map(expr => {
      const new_users = users.filter(user => {
        return user.exp === expr;
      });
      return { id: expr, name: `${expr}`, expr: true, users: new_users };
    });

    users = exp;
  }

  yield put(filterUsersSuccess(users));
}

export default all([takeLatest('@filterUsers/REQUEST', filterUsers)]);
