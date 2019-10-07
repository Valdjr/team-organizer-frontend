import styled, { keyframes } from 'styled-components';
import { Card } from '@material-ui/core';

import { bounceIn, fadeIn } from 'react-animations';

export const bounce = keyframes`${bounceIn}`;
export const fade = keyframes`${fadeIn}`;

export const PageTitle = styled.h1`
  animation: 0.3s ${fade} ease;
`;

export const Group = styled.div`
  display: ${props => props.display || 'flex'};
  flex-direction: column;

  .scrollbar {
    padding-bottom: 20px;
  }
`;

export const GroupTitle = styled.h2`
  font-size: 35px;
  margin-bottom: 25px;

  & > * {
    margin-right: 10px;
  }
`;

export const Participants = styled.div`
  display: flex;
  width: fit-content;
  & > *:not(:last-child) {
    margin-right: 30px;
  }
`;

export const Participant = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  a {
    text-decoration: none;
  }
  animation: 0.35s ${bounce} ease;
`;

export const ParticipantCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 27px !important;
  margin-bottom: 10px;
  img {
    width: 100%;
  }
`;

export const RoleTitle = styled.h3`
  font-size: 15px;
  font-weight: 800;
  padding: 10px 0;
`;

export const ParticipantName = styled.h4`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: center;
  div {
    color: #3e3e3e;
  }
`;
