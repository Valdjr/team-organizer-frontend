import { CardContent, InputBase, Select } from '@material-ui/core';
import styled from 'styled-components';

export const ContentFilters = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  align-items: center;

  @media only screen and (max-width: 992px) {
    height: 90px;
    flex-direction: column;
    align-items: stretch;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CardContentS = styled(CardContent)`
  padding: 2px 20px !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #3e3e3e;
  border-radius: 24px;
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
  }
`;

export const InputNaked = styled(InputBase)`
  &::placeholder,
  &:-ms-input-placeholder,
  &::-ms-input-placeholder {
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
