import React from 'react';

import caio from '../../assets/caio.png';
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

export default function Users() {
  const filterby = {
    width: '67px',
    dropdown: [
      {
        name: 'Name',
        value: 'name',
        selected: true,
      },
      {
        name: 'Age',
        value: 'age',
        selected: false,
      },
    ],
  };

  const sortby = {
    width: '104px',
    dropdown: [
      {
        name: 'Roles',
        value: 'roles',
        selected: true,
      },
      {
        name: 'Experience',
        value: 'experience',
        selected: false,
      },
      {
        name: 'Nivel',
        value: 'nivel',
        selected: false,
      },
    ],
  };

  return (
    <>
      <h1>Users</h1>
      <Filter
        filterwWidth={450}
        filterby={filterby}
        sortWidth={230}
        sortby={sortby}
      />
      <ContentResults>
        <Group>
          <GroupTitle>DESIGN (1)</GroupTitle>
          <Participants>
            <Participant>
              <ParticipantCard>
                <img src={caio} />
                <RoleTitle>DESIGNER</RoleTitle>
              </ParticipantCard>
              <ParticipantName>Paulo</ParticipantName>
            </Participant>
          </Participants>
        </Group>
      </ContentResults>
    </>
  );
}
