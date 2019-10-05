import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import empty from 'is-empty';
import crypto from 'crypto';

import { filterUsersRequest } from '../../store/modules/filterUsers/actions';
import ReactLoader from '../../components/Loader';

import { ContentPage, ContentScore } from '../../styles/global';
import {
  PageTitle,
  UserInformation,
  Column,
  TitleColumn,
  ContentData,
  DataTitle,
  ContentSkill,
  SkillData,
  ZeroSkills,
} from './styles';

export default function User({ match }) {
  const dispatch = useDispatch();
  const { cryptoIdName } = match.params;

  const [userName, setUserName] = useState('');
  const [profileData, setProfileData] = useState([]);
  const { filterUsers_loading: loading, resultUsers } = useSelector(
    state => state.filterUsers
  );
  const [user] = resultUsers.local === 'user' ? resultUsers.users : [{}];

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
    if (!empty(user)) {
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

  return (
    <>
      <PageTitle>{userName}</PageTitle>
      <ContentPage>
        {loading ? (
          <ReactLoader />
        ) : (
          <>
            <UserInformation>
              <Column>
                <img src={user.avatar} alt={user.name} />
                <span>SCORE</span>
                <ContentScore>{user.score}</ContentScore>
              </Column>
              <Column>
                <TitleColumn>PROFILE</TitleColumn>
                {!empty(profileData) ? (
                  <>
                    {profileData.map(data => {
                      if (!empty(data[1])) {
                        return (
                          <ContentData key={data[0]}>
                            <DataTitle>{data[0]}</DataTitle>
                            <span>{data[1]}</span>
                          </ContentData>
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
                <ContentSkill>
                  {!empty(user.skill_id) ? (
                    <>
                      {user.skill_id.skills.map(skill => (
                        <SkillData key={skill._id}>
                          <span>{skill.name}</span>
                          <span>LV. {skill.level}</span>
                        </SkillData>
                      ))}
                    </>
                  ) : (
                    <ZeroSkills>Without registered skills</ZeroSkills>
                  )}
                </ContentSkill>
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
