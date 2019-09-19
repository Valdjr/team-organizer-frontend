import React from 'react';

import store from '../../store';
import Filter from '../_layouts/filters';
import {
  ContentResults,
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
  const { users: grouped } = store.getState().filterUsers;
  return (
    <>
      <h1>Users</h1>
      <Filter filterby={filterby} sortby={sortby} who="users" />
      <ContentResults>
        {grouped.map(group => (
          <Group key={group.id}>
            <GroupTitle>
              {group.name} ({group.users.length})
            </GroupTitle>
            <Participants>
              {group.users.map(user => (
                <Participant key={user.id}>
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
      </ContentResults>
    </>
  );
}
