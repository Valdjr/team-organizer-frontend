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
  const { cryptoIdName } = match.params;

  const [userName, setUserName] = useState('');
  const [profileData, setProfileData] = useState([]);
  const { loading, users } = useSelector(state => state.filterUsers);
  const [user] = users;

  useEffect(() => {
    if (!empty(process.env.REACT_APP_SECRET_PASSWORD)) {
      const decipher = crypto.createDecipher(
        'aes-256-ctr',
        process.env.REACT_APP_SECRET_PASSWORD
      );
      const idName = decipher.update(cryptoIdName, 'hex', 'utf8').split('-');
      const id = idName[0];
      const name = idName[1];
      setUserName(name);
      dispatch(filterUsersRequest({ id }));
    }
  }, [dispatch, cryptoIdName]);

  useEffect(() => {
    if (!empty(user) && !empty(user._id)) {
      setProfileData([
        ['ID', user._id],
        ['NAME', user.name],
        ['EMAIL', user.email],
        ['ROLE', user.role_id.name],
        ['EXPERIENCE', `${user.exp} year(s)`],
        ['DISCORD', user.discord_id],
      ]);
    }
  }, [user]);

  if (empty(process.env.REACT_APP_SECRET_PASSWORD)) {
    return (
      <SimpleInformation>
        Warning:
        <span>You must to fill .env document</span>
      </SimpleInformation>
    );
  }

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
                          <Label key={data[0]}>
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
      cryptoIdName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
