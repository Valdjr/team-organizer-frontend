import React from 'react';
import { useSelector } from 'react-redux';
import Dotdotdot from 'react-dotdotdot';
import empty from 'is-empty';

import { Scrollbars } from 'react-custom-scrollbars';
import Filter from '../../components/Filter';
import UserLink from '../../components/UserLink';

import {
  ContentPage,
  SimpleInformation,
  ContentScore,
} from '../../styles/global';
import {
  Group,
  GroupTitle,
  Participants,
  Participant,
  ParticipantCard,
  RoleTitle,
  ParticipantName,
} from '../../styles/cards_users';

const filterby = [
  {
    name: 'Name',
    value: 'name',
    selected: true,
  },
  {
    name: 'Email',
    value: 'email',
    selected: false,
  },
];

const sortby = [
  {
    name: 'Roles',
    value: 'roles',
    selected: true,
  },
  {
    name: 'Score',
    value: 'score',
    selected: false,
  },
];

export default function Users() {
  const { filterUsers_loading: loading, resultUsers } = useSelector(
    state => state.filterUsers
  );

  return (
    <>
      <h1>Users</h1>
      <Filter filterby={filterby} sortby={sortby} who="users" />
      <ContentPage>
        {loading ? (
          <SimpleInformation>Loading...</SimpleInformation>
        ) : (
          <>
            {resultUsers.local === 'users' && !empty(resultUsers.users) ? (
              <>
                {resultUsers.users.map(group => (
                  <Group key={`${group._id || Math.random() * 10}`}>
                    {!empty(group.users) ? (
                      <>
                        <GroupTitle>
                          {group.score ? (
                            <>
                              <span>Score</span>
                              <ContentScore>{group.name}</ContentScore>
                            </>
                          ) : (
                            <span>{group.name}</span>
                          )}
                          <span>({group.users.length})</span>
                        </GroupTitle>
                        <Scrollbars style={{ width: '100%', height: 225 }}>
                          <Participants>
                            {group.users.map(user => (
                              <Participant key={`${user._id}`}>
                                <UserLink
                                  userId={user._id}
                                  userName={user.name}
                                >
                                  <>
                                    <ParticipantCard>
                                      <img src={user.avatar} alt={user.name} />
                                      <RoleTitle>
                                        {user.role_id.name.toUpperCase()}
                                      </RoleTitle>
                                    </ParticipantCard>
                                    <ParticipantName>
                                      <Dotdotdot clamp={2}>
                                        {user.name.substring(
                                          0,
                                          `${user.name} `.indexOf(' ')
                                        )}
                                      </Dotdotdot>
                                    </ParticipantName>
                                  </>
                                </UserLink>
                              </Participant>
                            ))}
                          </Participants>
                        </Scrollbars>
                      </>
                    ) : (
                      <></>
                    )}
                  </Group>
                ))}
              </>
            ) : (
              <SimpleInformation>
                Nothing found!
                <span>Try to change filters or type new search terms.</span>
              </SimpleInformation>
            )}
          </>
        )}
      </ContentPage>
    </>
  );
}
