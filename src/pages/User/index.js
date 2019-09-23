import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import empty from 'is-empty';
import crypto from 'crypto';

import { filterUsersRequest } from '../../store/modules/filterUsers/actions';

import {
  SimpleInformation,
  ContentPage,
  ContentScore,
} from '../../styles/global';
import {
  UserInformation,
  Column,
  TitleColumn,
  Label,
  TitleLabel,
  DataLabel,
} from './styles';

export default function User({ match }) {
  const dispatch = useDispatch();
  const { ctyptoIdName } = match.params;

  const [userName, setUserName] = useState('');
  const [profileData, setProfileData] = useState([]);
  const { loading, users } = useSelector(state => state.filterUsers);
  const [user] = users;

  useEffect(() => {
    const decipher = crypto.createDecipher(
      'aes-256-ctr',
      process.env.REACT_APP_SECRET_PASSWORD
    );
    const idName = decipher.update(ctyptoIdName, 'hex', 'utf8').split('-');
    const id = idName[0];
    const name = idName[1];
    setUserName(name);
    dispatch(filterUsersRequest({ id }));
  }, [dispatch, ctyptoIdName]);

  useEffect(() => {
    if (!empty(user)) {
      setProfileData([
        ['ID', user._id],
        ['NAME', user.name],
        ['EMAIL', user.email],
        ['ROLE', user.role_id.name],
        ['EXPERIENCE', `${user.exp} year(s)`],
        ['DISCOR', user.discord_id],
      ]);
    }
  }, [user]);

  return (
    <>
      <h1>{userName}</h1>
      <ContentPage>
        {loading ? (
          <SimpleInformation>Loading...</SimpleInformation>
        ) : (
          <>
            <UserInformation>
              <Column>
                <img src={user.avatar} alt={user.name} />
                <ContentScore>{user.score}</ContentScore>
              </Column>
              <Column>
                <TitleColumn>PROFILE</TitleColumn>
                {!empty(profileData) ? (
                  <>
                    {profileData.map(data => {
                      if (!empty(data[1])) {
                        return (
                          <Label>
                            <TitleLabel>{data[0]}</TitleLabel>
                            <DataLabel>{data[1]}</DataLabel>
                          </Label>
                        );
                      }
                      return '';
                    })}
                  </>
                ) : (
                  <></>
                )}
              </Column>
              <Column>
                <TitleColumn>SKILLS</TitleColumn>
              </Column>
            </UserInformation>
          </>
        )}
      </ContentPage>
    </>
  );
}

User.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      ctyptoIdName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
