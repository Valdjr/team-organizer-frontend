import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from '@sweetalert/with-react';
import Dotdotdot from 'react-dotdotdot';
import empty from 'is-empty';
import { toast } from 'react-toastify';
import { MdSettingsBackupRestore, MdFlashOn } from 'react-icons/md';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { actionsTeamsRequest } from '../../store/modules/actionsTeams/actions';
import { userPerTeamRequest } from '../../store/modules/userPerTeam/actions';

import Filter from '../../components/Filter';
import UserLink from '../../components/UserLink';
import ReactLoader from '../../components/Loader';
import 'react-perfect-scrollbar/dist/css/styles.css';

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

export default function Teams() {
  const dispatch = useDispatch();

  const { filterTeams_loading: loading, resultTeams } = useSelector(
    state => state.filterTeams
  );
  const { possibilityPerTeam } = useSelector(state => state.userPerTeam);
  const { actionsTeams_loading, actionMensagem } = useSelector(
    state => state.actionsTeams
  );

  useEffect(() => {
    async function fechData() {
      await dispatch(userPerTeamRequest({}));
    }
    fechData();
  }, [dispatch]);

  useEffect(() => {
    async function fechData() {
      if (
        swal.getState().isOpen &&
        !actionsTeams_loading &&
        !empty(actionMensagem)
      ) {
        toast.success(actionMensagem, {
          onClose: () => window.location.reload(),
        });
        swal.close();
      }
    }
    fechData();
  }, [actionMensagem, actionsTeams_loading]);

  function handleActionTeam(the_action) {
    let mensagem = '';
    let confirm_text = '';
    switch (the_action) {
      case 'sort':
        if (possibilityPerTeam.sucesso === false) {
          mensagem = (
            <div>
              <p>
                There&apos;re still
                <span> </span>
                <span>
                  {possibilityPerTeam.falta} user
                  {possibilityPerTeam.falta > 1 && 's'} left
                </span>
                <span> </span>
                until we can make all teams with the same amount of users.
              </p>
              <p>Do you wish to continue anyway?</p>
            </div>
          );
        } else {
          mensagem = (
            <div>
              <p>
                You are about to sort all users by automatically placing them
                within a team
              </p>
              <p>Do you wish to continue?</p>
            </div>
          );
        }
        confirm_text = 'Continue';
        break;
      case 'reset':
        mensagem = (
          <div>
            <p>Do you really wanna reset all the teams?</p>
            <p>This means any team won&apos;t more available.</p>
          </div>
        );
        confirm_text = 'Sure!';
        break;
      default:
    }

    swal({
      title: 'Warning',
      buttons: {
        cancel: true,
        confirm: { text: confirm_text, closeModal: false },
      },
      dangerMode: true,
      content: mensagem,
    }).then(async confirmed => {
      if (confirmed !== null) {
        await dispatch(actionsTeamsRequest(the_action));
      }
    });
  }

  const isTeamOkay = resultTeams.local === 'teams' && !empty(resultTeams.teams);
  return (
    <>
      <ContentTitleButton>
        <h1>Teams</h1>
        <SortButton
          variant="contained"
          size="large"
          onClick={() => {
            handleActionTeam('sort');
          }}
          {...(!loading && !isTeamOkay ? {} : { disabled: true })}
        >
          <MdFlashOn size={23} />
          AUTO SORT TEAM
        </SortButton>
        <ResetButton
          variant="outlined"
          size="large"
          onClick={() => {
            handleActionTeam('reset');
          }}
          {...(!loading && isTeamOkay ? {} : { disabled: true })}
        >
          <MdSettingsBackupRestore size={23} />
          RESET TEAMS
        </ResetButton>
      </ContentTitleButton>
      <Filter filterby={filterby} who="teams" />
      <ContentPage>
        {loading ? (
          <ReactLoader />
        ) : (
          <>
            {isTeamOkay ? (
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
                        <PerfectScrollbar
                          className="scrollbar"
                          option={{
                            suppressScrollY: true,
                            wheelPropagation: true,
                            useBothWheelAxes: true,
                          }}
                        >
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
