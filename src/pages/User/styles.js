import styled from 'styled-components';

export const UserInformation = styled.div`
  display: flex;
  align-items: stretch;
  & > * {
    margin-right: 70px;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  &:first-of-type {
    align-items: center;
  }
  img {
    width: 100px;
    border-radius: 27px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.15);
  }
`;

export const TitleColumn = styled.h2`
  font-size: 35px;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const TitleLabel = styled.span`
  font-size: 18px;
  font-weight: bolder;
`;
export const DataLabel = styled.span``;
