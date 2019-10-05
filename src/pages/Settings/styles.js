import styled, { keyframes } from 'styled-components';

import { bounceIn, fadeIn } from 'react-animations';
export const bounce = keyframes`${bounceIn}`;
export const fade = keyframes`${fadeIn}`;

export const PageTitle = styled.h1`
  margin-right: 20px;
  animation: 0.3s ${fade} ease;
`;
