import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdLoop, MdLink } from 'react-icons/md';
import empty from 'is-empty';
import { Table } from 'semantic-ui-react';

import 'semantic-ui-css/components/table.min.css';
import { filterUsersRequest } from '../../store/modules/filterUsers/actions';

import {
  OverviewTitle,
  SwitchButton,
  TableContent,
  ContentScoreMini,
  CurrentStatusContent,
  StatusOne,
  StatusTitle,
  StatusData,
} from './styles';
import {
  ContentPage,
  SimpleInformation,
  ContentScore,
} from '../../styles/global';

export default function Dashboard() {
  const dispatch = useDispatch();
  const [toSwitch, setToSwtich] = useState({ current: 'Users', next: 'Teams' });
  const resultTeams = {
    local: 'dashboard',
    teams: [
      {
        name: 'Team 1',
        score: 81,
        roles: {
          bussines: 2,
          desing: 1,
          'dev-font': 1,
          'dev-back': 1,
          marketing: 0,
        },
        total: 5,
      },
    ],
    roles: ['bussines', 'desing', 'dev-font', 'dev-back', 'marketing'],
  };
  const { loading, resultUsers } = useSelector(state => state.filterUsers);

  function handleSwtichData() {
    const oldCurrent = toSwitch.current;
    const newCurrent = toSwitch.next;
    setToSwtich({ current: newCurrent, next: oldCurrent });
  }

  useEffect(() => {
    async function fechData() {
      await dispatch(filterUsersRequest({}));
    }
    fechData();
  }, [toSwitch, dispatch]);

  return (
    <>
      <h1>Current Status</h1>
      <ContentPage>
        {loading ? (
          <SimpleInformation>Loading...</SimpleInformation>
        ) : (
          <>
            <CurrentStatusContent>
              <StatusOne>
                <StatusTitle>USERS</StatusTitle>
                <StatusData>
                  {resultUsers.local === 'dashboard' &&
                  !empty(resultUsers.users)
                    ? resultUsers.users.length
                    : 0}
                </StatusData>
              </StatusOne>
              <StatusOne>
                <StatusTitle>TEAMS</StatusTitle>
                <StatusData>1</StatusData>
              </StatusOne>
              <StatusOne>
                <StatusTitle>AVG. SCORE</StatusTitle>
                <StatusData>
                  <ContentScore>80</ContentScore>
                </StatusData>
              </StatusOne>
            </CurrentStatusContent>
            <OverviewTitle>
              <span>Overview {toSwitch.current}</span>
              <SwitchButton variant="outlined" onClick={handleSwtichData}>
                <MdLoop size={18} /> SWTICH TO {toSwitch.next.toUpperCase()}
              </SwitchButton>
            </OverviewTitle>
            <TableContent>
              {resultUsers.local === 'dashboard' &&
              !empty(resultUsers.users) ? (
                <>
                  {toSwitch.current === 'Users' ? (
                    <Table basic="very" collapsing>
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
                    <Table basic="very" collapsing>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>ID</Table.HeaderCell>
                          <Table.HeaderCell>NAME</Table.HeaderCell>
                          <Table.HeaderCell>SCORE</Table.HeaderCell>
                          {resultTeams.roles.map(rl => (
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
                              <ContentScoreMini>{tm.score}</ContentScoreMini>
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
                  )}
                </>
              ) : (
                <></>
              )}
            </TableContent>
          </>
        )}
      </ContentPage>
    </>
  );
}
