import React from 'react';
import { useSelector } from 'react-redux';
import Dotdotdot from 'react-dotdotdot';
import empty from 'is-empty';
import { MdSettingsBackupRestore, MdFlashOn } from 'react-icons/md';

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
import { ContentTitleButton, SortButton, ResetButton } from './styles';

const filterby = [
  {
    name: 'Team',
    value: 'name',
    selected: true,
  },
  {
    name: 'Score',
    value: 'scoreTeam',
    selected: false,
  },
];

import ReactLoader from '../../components/Loader';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default function Teams() {
  const { filterTeams_loading: loading, resultTeams } = useSelector(
    state => state.filterTeams
  );

  return (
    <>
      <ContentTitleButton>
        <h1>Teams</h1>
        <SortButton variant="contained" size="large">
          <MdFlashOn size={23} />
          AUTO SORT TEAM
        </SortButton>
        <ResetButton variant="outlined" size="large">
          <MdSettingsBackupRestore size={23} />
          RESET TEAMS
        </ResetButton>
      </ContentTitleButton>
      <Filter filterby={filterby} who="teams" />
      <ContentPage>
        {loading ? (
          <SimpleInformation>Loading...</SimpleInformation>
        ) : (
          <>
            {resultTeams.local === 'teams' && !empty(resultTeams.teams) ? (
              <>
                {resultTeams.teams.map(team => (
                  <Group key={`${team._id}`}>
                    {!empty(team.users) ? (
                      <>
                        <GroupTitle>
                          <span>{team.name}</span>
                          <ContentScore>{team.scoreTeam}</ContentScore>
                          <span>({team.users.length})</span>
                        </GroupTitle>
                        <Scrollbars style={{ width: '100%', height: 225 }}>
                          <Participants>
                            {team.users.map(user => (
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
