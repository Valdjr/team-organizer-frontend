import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import empty from 'is-empty';
import { MdLoop, MdLink, MdAnnouncement } from 'react-icons/md';
import { Table, Popup } from 'semantic-ui-react';

import 'semantic-ui-css/components/table.min.css';
import 'semantic-ui-css/components/popup.min.css';
import 'semantic-ui-css/components/icon.min.css';
import { filterUsersRequest } from '../../store/modules/filterUsers/actions';
import { filterTeamsRequest } from '../../store/modules/filterTeams/actions';
import { userPerTeamRequest } from '../../store/modules/userPerTeam/actions';

import ReactLoader from '../../components/Loader';

import {
  OverviewTitle,
  SwitchButton,
  TableContent,
  ContentScoreMini,
  LineInformations,
  CurrentStatusContent,
  StatusOne,
  StatusTitle,
  StatusData,
  AdviceContent,
  AdviceLine,
  PageTitle,
  UsersRemaining,
} from './styles';
import {
  ContentPage,
  SimpleInformation,
  ContentScore,
} from '../../styles/global';

export default function Dashboard() {
  const dispatch = useDispatch();

  const [toSwitch, setToSwtich] = useState({ current: 'Users', next: 'Teams' });

  const { filterUsers_loading, resultUsers } = useSelector(
    state => state.filterUsers
  );
  const { filterTeams_loading, resultTeams } = useSelector(
    state => state.filterTeams
  );
  const { userPerTeam_loading, possibilityPerTeam } = useSelector(
    state => state.userPerTeam
  );

  const loading =
    filterUsers_loading || filterTeams_loading || userPerTeam_loading;
  const isUserOkay =
    resultUsers.local === 'dashboard' && !empty(resultUsers.users);
  const isTeamOkay =
    resultTeams.local === 'dashboard' && !empty(resultTeams.teams);
  const isTeamScoreTeamOkay =
    resultTeams.local === 'dashboard' && !empty(resultTeams.scoresTeams);
  const propsPopup = {
    style: { background: '#FF5700', color: '#fff' },
    size: 'tiny',
    basic: true,
    position: 'bottom center',
    trigger: <MdAnnouncement size={20} color="#FF5700" />,
  };

  function handleSwtichData() {
    const oldCurrent = toSwitch.current;
    const newCurrent = toSwitch.next;
    setToSwtich({ current: newCurrent, next: oldCurrent });
  }

  useEffect(() => {
    async function fechData() {
      await dispatch(filterUsersRequest({}));
      await dispatch(
        filterTeamsRequest({ withUsers: 'roles', scoresTeams: true })
      );
      await dispatch(userPerTeamRequest({}));
    }
    fechData();
  }, [dispatch]);

  return (
    <>
      <PageTitle>Current Status</PageTitle>
      <ContentPage>
        {loading ? (
          <ReactLoader />
        ) : (
          <>
            <LineInformations>
              <CurrentStatusContent>
                <StatusOne>
                  <StatusTitle>USERS</StatusTitle>
                  <StatusData>
                    {isUserOkay ? resultUsers.users.length : 0}
                  </StatusData>
                </StatusOne>
                <StatusOne>
                  <StatusTitle>TEAMS</StatusTitle>
                  <StatusData>
                    {isTeamOkay ? resultTeams.teams.length : 0}
                  </StatusData>
                </StatusOne>
                <StatusOne>
                  <StatusTitle>AVG. SCORE</StatusTitle>
                  <StatusData>
                    <ContentScore>
                      {isTeamScoreTeamOkay
                        ? resultTeams.scoresTeams.average
                        : 0}
                    </ContentScore>
                  </StatusData>
                </StatusOne>
              </CurrentStatusContent>
              {!isTeamOkay ? (
                <AdviceContent>
                  <AdviceLine>
                    <Popup
                      content="This is the number of teams the system could create, based on the rules defined in Settings and the current user number."
                      {...propsPopup}
                    />
                    <span>
                      TEAM NUMBER MAX: {possibilityPerTeam.numeroDeTimes}
                    </span>
                  </AdviceLine>
                  {possibilityPerTeam.sucesso === false ? (
                    <AdviceLine>
                      <Popup
                        content="This shows how many signed up users are left to create all teams with the same amount of users inside."
                        {...propsPopup}
                      />
                      <span>
                        USERS REMAINING:
                        <UsersRemaining>
                          {possibilityPerTeam.falta}
                        </UsersRemaining>
                      </span>
                    </AdviceLine>
                  ) : (
                    <></>
                  )}
                </AdviceContent>
              ) : (
                <></>
              )}
            </LineInformations>
            <OverviewTitle>
              <span>Overview {toSwitch.current}</span>
              {isTeamOkay ? (
                <SwitchButton variant="outlined" onClick={handleSwtichData}>
                  <MdLoop size={18} /> SWTICH TO {toSwitch.next.toUpperCase()}
                </SwitchButton>
              ) : (
                <></>
              )}
            </OverviewTitle>
            <TableContent>
              {toSwitch.current === 'Users' ? (
                <>
                  {isUserOkay ? (
                    <Table basic="very" collapsing selectable>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>ID</Table.HeaderCell>
                          <Table.HeaderCell>NAME</Table.HeaderCell>
                          <Table.HeaderCell>EMAIL</Table.HeaderCell>
                          <Table.HeaderCell>ROLE</Table.HeaderCell>
                          <Table.HeaderCell>SCORE</Table.HeaderCell>
                          <Table.HeaderCell>EXP</Table.HeaderCell>
                          <Table.HeaderCell>DISCORD</Table.HeaderCell>
                          <Table.HeaderCell>TEAM</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {resultUsers.users.map((us, index) => (
                          <Table.Row key={us._id}>
                            <Table.Cell>
                              <span className="id_image">
                                {index + 1}{' '}
                                <img src={us.avatar} alt={us.name} />
                              </span>
                            </Table.Cell>
                            <Table.Cell title={us.name}>
                              {us.name.substring(0, `${us.name} `.indexOf(' '))}
                            </Table.Cell>
                            <Table.Cell>{us.email}</Table.Cell>
                            <Table.Cell>
                              {us.role_id.name.toUpperCase()}
                            </Table.Cell>
                            <Table.Cell>
                              <ContentScoreMini>{us.score}</ContentScoreMini>
                            </Table.Cell>
                            <Table.Cell textAlign="center">{us.exp}</Table.Cell>
                            <Table.Cell textAlign="center">
                              {!empty(us.discord_id) ? (
                                <Link to="/">
                                  <MdLink size={22} color="#FF5700" />
                                </Link>
                              ) : (
                                <></>
                              )}
                            </Table.Cell>
                            <Table.Cell>
                              {!empty(us.team_id) ? (
                                `${us.team_id.name}`
                              ) : (
                                <span className="no_team">None</span>
                              )}
                            </Table.Cell>
                          </Table.Row>
                        ))}
                      </Table.Body>
                    </Table>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <>
                  {isTeamOkay ? (
                    <Table basic="very" collapsing selectable>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>ID</Table.HeaderCell>
                          <Table.HeaderCell>NAME</Table.HeaderCell>
                          <Table.HeaderCell>SCORE</Table.HeaderCell>
                          {Object.keys(resultTeams.rolesBase).map(rl => (
                            <Table.HeaderCell key={rl} className="team_roles">
                              {rl.toUpperCase()}
                            </Table.HeaderCell>
                          ))}
                          <Table.HeaderCell>TOTAL</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {resultTeams.teams.map((tm, index) => (
                          <Table.Row key={tm.name}>
                            <Table.Cell>{index + 1}</Table.Cell>
                            <Table.Cell>{tm.name}</Table.Cell>
                            <Table.Cell>
                              <ContentScoreMini>
                                {tm.scoreTeam}
                              </ContentScoreMini>
                            </Table.Cell>
                            {Object.keys(tm.roles).map(ind => (
                              <Table.Cell key={String(ind)} textAlign="center">
                                {String(tm.roles[ind])}
                              </Table.Cell>
                            ))}
                            <Table.Cell textAlign="center">
                              {tm.total}
                            </Table.Cell>
                          </Table.Row>
                        ))}
                      </Table.Body>
                    </Table>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </TableContent>
          </>
        )}
      </ContentPage>
    </>
  );
}
