import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const ContentTitleButton = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-right: 20px;
  }

  button {
    font-weight: 800;
    border-radius: 15px !important;
    margin-right: 13px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    & .divider {
      display: none;
    }
  }
`;

export const SortButton = styled(Button)`
  color: #fff !important;
  background: #ff5700 !important;
  &:hover {
    background: #ff5700 !important;
  }

  @media only screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const ResetButton = styled(Button)`
  color: #ff5700 !important;
  border-color: #ff5700 !important;
  svg {
    margin-right: 5px;
  }
  &:hover {
    background: #fff !important;
  }
`;
