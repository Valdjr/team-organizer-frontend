import styled, { keyframes } from 'styled-components';
import { Button } from '@material-ui/core';

import { bounceIn, fadeIn } from 'react-animations';
export const bounce = keyframes`${bounceIn}`;
export const fade = keyframes`${fadeIn}`;

export const ContentTitleButton = styled.div`
  display: flex;
  align-items: center;
  animation: 0.3s ${fade} ease;

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
  opacity: ${props => (props.disabled ? '0.5' : '1')} !important;
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
  opacity: ${props => (props.disabled ? '0.5' : '1')} !important;
  &:hover {
    background: #fff !important;
  }
  svg {
    margin-right: 5px;
  }
`;
