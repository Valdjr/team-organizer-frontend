import { CardContent, InputBase } from '@material-ui/core';
import styled, { keyframes } from 'styled-components';

import { bounceIn, fadeIn } from 'react-animations';

export const bounce = keyframes`${bounceIn}`;
export const fade = keyframes`${fadeIn}`;

export const PageTitle = styled.h1`
  margin-right: 20px;
  animation: 0.3s ${fade} ease;
`;

export const ContentRules = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleRules = styled.h4`
  font-size: 35px;
  button {
    margin-left: 20px;
  }
`;

export const SettingRules = styled.div`
  margin-top: 10px;
`;
export const ContentRuleRole = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const InputRole = styled(InputBase)`
  font: 15px 'Roboto Mono', monospace !important;

  padding: 8px;
  background: #ff5700;
  border-radius: 10px;
  input {
    color: #fff;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    width: 120px;
  }
`;

export const LineLink = styled.div`
  width: 10px;
  height: 2px;
  background: #ff5700;
`;

export const CardRule = styled(CardContent)`
  margin-top: ${props => (props.margintop === 'true' ? '15px' : '0px')};
  padding: 5px 20px !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #3e3e3e;
  border-radius: 24px;
  width: fit-content;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    & .divider {
      display: none;
    }
  }
`;

export const TitleCardRule = styled.div`
  font-weight: 600;
`;

export const InputNaked = styled(InputBase)`
  font: 15px 'Roboto Mono', monospace !important;
  width: 40px;
  input {
    color: ${({ name }) => {
      switch (name) {
        case 'min':
          return '#FF2B00';
        case 'max':
          return '#21C62C';
        default:
          return 'initial';
      }
    }};
    text-align: center;
  }
  &::placeholder {
    font-weight: lighter;
    color: #c5c5c5;
  }
`;
