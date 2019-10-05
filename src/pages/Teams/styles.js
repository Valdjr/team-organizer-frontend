import styled, { keyframes } from 'styled-components';

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
    color: #fff;
    background: #ff5700;
    width: fit-content;

    &:hover {
      background: #ff5700;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    button {
      margin-left: 10px;
    }
    & .divider {
      display: none;
    }
  }
`;
