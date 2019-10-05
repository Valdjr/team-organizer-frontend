import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dotdotdot from 'react-dotdotdot';
import empty from 'is-empty';
import crypto from 'crypto';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import ReactLoader from '../../components/Loader';
import Filter from '../../components/Filter';

import {
  ContentPage,
  SimpleInformation,
  ContentScore,
} from '../../styles/global';
import {
  PageTitle,
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
  const { filterUsers_loading: loading, resultUsers } = useSelector(
    state => state.filterUsers
  );

  function cryptIdName(idName) {
    const cipher = crypto.createCipher(
      'aes-256-ctr',
      process.env.REACT_APP_SECRET_PASSWORD
    );
    return cipher.update(idName, 'utf8', 'hex');
  }

  return (
    <>
      <PageTitle>Users</PageTitle>
      <Filter filterby={filterby} sortby={sortby} who="users" />
      <ContentPage>
        {loading ? (
          <ReactLoader />
        ) : (
          <>
            {resultUsers.local === 'users' && resultUsers.users.length > 0 ? (
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
                        <PerfectScrollbar
                          className="scrollbar"
                          option={{
                            suppressScrollY: true,
                            wheelPropagation: true,
                            useBothWheelAxes: true,
                          }}
                        >
                          <Participants>
                            {group.users.map(user => (
                              <Participant key={`${user._id}`}>
                                <Link
                                  to={`/user/${cryptIdName(
                                    `${user._id}-${user.name}`
                                  )}`}
                                  title={user.name}
                                >
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
                                </Link>
                              </Participant>
                            ))}
                          </Participants>
                        </PerfectScrollbar>
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
                <span>Try removing filters or type new search terms.</span>
              </SimpleInformation>
            )}
          </>
        )}
      </ContentPage>
    </>
  );
}
