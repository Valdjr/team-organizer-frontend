import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { filterUsersSuccess } from './actions';

export function* filterUsers({ payload }) {
  const { filter, search, sort } = payload;

  const thisFilter =
    search.length > 0 ? `${filter}_like=^${search.trim()}` : '';
  const thisExp = sort === 'exp' ? `&_sort=exp$_order=asc` : '';
  const responseFilter = yield call(api.get, `users?${thisFilter}${thisExp}`);
  let users = [...responseFilter.data];

  if (sort === 'roles') {
    const responseSort = yield call(api.get, 'roles?_sort=name');
    let roles = [...responseSort.data];

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
      return { exp: expr, users: new_users };
    });

    users = exp;
  }

  yield put(filterUsersSuccess(users));
}

export default all([takeLatest('@filterUsers/REQUEST', filterUsers)]);
