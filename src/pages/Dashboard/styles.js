import styled from 'styled-components';
import { Button } from '@material-ui/core';

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
