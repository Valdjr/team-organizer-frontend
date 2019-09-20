import React from 'react';
import { useSelector } from 'react-redux';

import Filter from '../_layouts/filters';
import { ContentResults, Loading } from '../../styles/global';
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
  {
    name: 'Team',
    value: 'team',
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
    name: 'Experience',
    value: 'exp',
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
          <Loading>Loading...</Loading>
        ) : (
          <>
            {resultUsers.map(group => (
              <Group key={`${group.id}-${group.name}`}>
                <GroupTitle>
                  {group.name} ({group.users.length})
                </GroupTitle>
                <Participants>
                  {group.users.map(user => (
                    <Participant key={`${user.id}-${user.name}`}>
                      <ParticipantCard>
                        <img src={user.avatar} alt={user.name} />
                        <RoleTitle>{group.name}</RoleTitle>
                      </ParticipantCard>
                      <ParticipantName>{user.name}</ParticipantName>
                    </Participant>
                  ))}
                </Participants>
              </Group>
            ))}
          </>
        )}
      </ContentResults>
    </>
  );
}
