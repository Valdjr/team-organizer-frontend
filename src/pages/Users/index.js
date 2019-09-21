import React from 'react';
import { useSelector } from 'react-redux';

import Filter from '../_layouts/filters';
import {
  ContentResults,
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
} from './styles';

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
  const { loading, users: resultUsers } = useSelector(
    state => state.filterUsers
  );

  return (
    <>
      <h1>Users</h1>
      <Filter filterby={filterby} sortby={sortby} who="users" />
      <ContentResults>
        {loading ? (
          <SimpleInformation>Loading...</SimpleInformation>
        ) : (
          <>
            {resultUsers.length > 0 ? (
              <>
                {resultUsers.map(group => (
                  <Group key={`${group.id}-${group.name}`}>
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
                    <Participants>
                      {group.users.map(user => (
                        <Participant key={`${user.id}-${user.name}`}>
                          <ParticipantCard>
                            <img src={user.avatar} alt={user.name} />
                            <RoleTitle>
                              {user.role_id.name.toUpperCase()}
                            </RoleTitle>
                          </ParticipantCard>
                          <ParticipantName>{user.name}</ParticipantName>
                        </Participant>
                      ))}
                    </Participants>
                  </Group>
                ))}
              </>
            ) : (
              <SimpleInformation>
                Nothing found!
                <span>Try removing filters or type new search terms.</span>
              </SimpleInformation>
            )}
          </>
        )}
      </ContentResults>
    </>
  );
}
