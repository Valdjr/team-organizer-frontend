import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';
import { Button } from '@material-ui/core';

import { bounceIn, fadeIn } from 'react-animations';

export const bounce = keyframes`${bounceIn}`;
export const fade = keyframes`${fadeIn}`;

export const PageTitle = styled.h1`
  animation: 0.3s ${fade} ease;
`;

export const LineInformations = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  animation: 0.3s ${fade} ease;
`;

export const CurrentStatusContent = styled.div`
  width: fit-content;
  border-bottom: 1px solid rgba(34, 36, 38, 0.1);
  padding-bottom: 15px;
  display: flex;
  & > * {
    margin-right: 40px;
  }
`;

export const StatusOne = styled.div``;

export const StatusTitle = styled.div``;

export const StatusData = styled.div`
  font-size: 35px;
  font-weight: 800;
`;

export const AdviceContent = styled.div``;

export const AdviceLine = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  font-size: 17px;
  font-weight: 600;
  svg {
    cursor: pointer;
    margin-right: 12px;
  }
`;

export const UsersRemaining = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 20px;
  border-radius: 5px;
  background: #ff5700;
  color: #fff;
  margin-left: 7px;
`;

export const OverviewTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 25px;
  & > * {
    margin-right: 20px;
  }
`;

export const SwitchButton = styled(Button)`
  border-radius: 12px !important;
  color: #ff5700 !important;
  border-color: #ff5700 !important;
  svg {
    margin-right: 5px;
  }
  &:hover {
    background: ${darken(0.02, '#fff')} !important;
  }
`;

export const TableContent = styled.div`
  .id_image {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 20px;
      border-radius: 5px;
      margin-left: 20px;
      box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.15);
    }
  }
  .no_team {
    color: #c5c5c5;
  }

  .team_roles {
    color: #ff5700 !important;
  }

  @media only screen and (max-width: 769px) {
    table {
      width: 100% !important;
    }
  }
`;

export const ContentScoreMini = styled.span`
  border: 1px solid;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 20px;
  border-radius: 5px;
`;
