import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
`;

export const Content = styled.div`
  width: auto;
  margin-left: 70px;
  padding: 30px 90px 40px 70px;
  @media only screen and (max-width: 992px) {
    padding-top: 45px;
  }
  @media only screen and (max-width: 768px) {
    padding-left: 25px;
  }
`;
