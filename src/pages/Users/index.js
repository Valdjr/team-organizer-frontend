import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dotdotdot from 'react-dotdotdot';
import empty from 'is-empty';
import InfiniteScroll from 'react-infinite-scroll-component';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import ReactLoader from '../../components/Loader';
import Filter from '../../components/Filter';
import UserLink from '../../components/UserLink';

import { filterParmsReset } from '../../store/modules/filterParms/actions';

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
  const dispatch = useDispatch();

  const [pageUsers, setPageUsers] = useState(1);
  const [allUsers, setAllUsers] = useState([]);

  const { needToResetPage } = useSelector(state => state.filterParms);
  const { filterUsers_loading: loading, resultUsers } = useSelector(
    state => state.filterUsers
  );

  useEffect(() => {
    if (resultUsers.local === 'users') {
      if (needToResetPage) {
        if (!empty(resultUsers.users)) {
          setAllUsers(resultUsers.users);
        } else {
          setAllUsers();
        }
      } else if (!empty(resultUsers.users)) {
        setAllUsers(allUsers.concat(resultUsers.users));
      }
    }
    if (needToResetPage) {
      dispatch(filterParmsReset());
    }
  }, [resultUsers]);

  console.log(resultUsers.users);

  return (
    <>
      <PageTitle>Users</PageTitle>
      <Filter
        filterby={filterby}
        sortby={sortby}
        ThisPage={pageUsers}
        who="users"
      />
      <ContentPage>
        {loading ? (
          <ReactLoader />
        ) : (
          <>
            {resultUsers.local === 'users' && !empty(resultUsers.users) ? (
              <>
                {resultUsers.users.map(group => (
                  <Group
                    key={`${group._id || Math.random() * 10}`}
                    display={empty(group.users) ? 'none' : 'flex'}
                  >
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
                          <span>({group.qtd})</span>
                        </GroupTitle>

                        <PerfectScrollbar
                          className="scrollbar"
                          options={{
                            suppressScrollY: true,
                            wheelPropagation: true,
                            useBothWheelAxes: true,
                          }}
                        >
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
                <span>Try to change filters or type new search terms.</span>
              </SimpleInformation>
            )}
          </>
        )}
      </ContentPage>
    </>
  );
}
