import styled from 'styled-components';

export const UserInformation = styled.div`
  display: flex;
  align-items: stretch;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 90px;
  &:first-of-type {
    align-items: center;
    span {
      font-weight: 600;
    }
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

export const ContentData = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const DataTitle = styled.span`
  font-size: 18px;
  font-weight: bolder;
`;

export const ContentSkill = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const SkillData = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 15px;
  & > *:first-of-type {
    margin-right: 20px;
  }
`;

export const ZeroSkills = styled.span`
  font-size: 20px;
  color: #c5c5c5;
`;
