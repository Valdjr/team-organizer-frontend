import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  height: 100%;
  width: 70px;
  background: #ff9100;
  background: linear-gradient(180deg, #ff9100 0%, #ff5700 100%);
  -webkit-box-shadow: 13px 0 18px 1px rgba(0, 0, 0, 0.16);
  box-shadow: 13px 0 18px 1px rgba(0, 0, 0, 0.16);

  div {
    display: flex;
    justify-content: center;
    background: #ff5700;
    padding: 10px;
  }

  li {
    display: flex;
    justify-content: center;
    padding: 4px;
    margin-top: 10px;

    a {
      padding: 6px;
      border: 2px solid;
      border-color: transparent;
      border-radius: 30%;

      &[active='true'] {
        border-color: #fff;
      }
      &:not([active='true']):hover {
        border-color: rgba(255, 255, 255, 0.5);
      }
      &[full='true'] {
        background: #fff;
      }
    }
  }
`;
