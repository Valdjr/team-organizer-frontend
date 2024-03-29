import { CardContent, InputBase, Select } from '@material-ui/core';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

export const fade = keyframes`${fadeIn}`;

export const ContentFilters = styled.div`
  display: flex;
  flex-flow: row wrap;
  animation: 0.4s ${fade} ease;

  & > *:not(:first-child) {
    margin-left: 20px;
  }

  @media only screen and (max-width: 920px) {
    & > * {
      margin-left: 0px !important;
    }
    flex-direction: column;
    align-items: stretch;
  }
`;

export const CardContentS = styled(CardContent)`
  margin-top: 15px;
  padding: 2px 20px !important;
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

export const ContentFilter = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 7px;
  }
`;
export const ContentSearch = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 7px;
  }
`;

export const Dropdown = styled(Select)`
  border-bottom: none !important;
  &:hover,
  &:after,
  &:before {
    border-bottom: none !important;
    content: '';
  }
  div.MuiInputBase-inputSelect,
  svg {
    color: #ff5700;
    text-transform: uppercase;
    font-family: 'Roboto Mono', monospace;
    font-weight: bold;
  }
`;

export const InputNaked = styled(InputBase)`
  font: 15px 'Roboto Mono', monospace !important;

  &::placeholder {
    font-weight: lighter;
    color: #c5c5c5;
  }
  @media only screen and (max-width: 768px) {
    width: 150px;
  }
`;

export const FilterTitle = styled.span`
  font-weight: bold;
`;
