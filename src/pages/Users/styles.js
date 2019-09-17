import styled from 'styled-components';
import { Card } from '@material-ui/core';

export const ContentResults = styled.div`
  padding-top: 50px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GroupTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 10px;
`;

export const Participants = styled.div``;

export const Participant = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  cursor: pointer;
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
  font-size: 18px;
  font-weight: 800;
  padding: 10px 0;
`;

export const ParticipantName = styled.h4`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 2px;
`;
