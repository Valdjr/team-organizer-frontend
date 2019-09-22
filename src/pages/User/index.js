import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { filterUsersRequest } from '../../store/modules/filterUsers/actions';

import { SimpleInformation, ContentResults } from '../../styles/global';
// import { Container } from './styles';

export default function User({ match }) {
  const dispatch = useDispatch();
  const { id } = match.params;

  const { loading, users } = useSelector(state => state.filterUsers);
  const [user] = users;

  useEffect(() => {
    dispatch(filterUsersRequest({ id }));
  }, [dispatch, id]);

  return (
    <ContentResults>
      {loading ? (
        <SimpleInformation>Loading...</SimpleInformation>
      ) : (
        <h1>{user.name}</h1>
      )}
    </ContentResults>
  );
}

User.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
