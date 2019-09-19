import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
`;

export const Navigation = styled.nav`
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
      &:hover {
        border-color: rgba(255, 255, 255, 0.5);
      }
    }
  }
`;

export const Profile = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  margin: 40px 70px 0 0;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    strong {
      font-size: 15px;
      color: #3e3e3e;
      padding-right: 10px;
    }

    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }

  @media only screen and (max-width: 992px) {
    margin-top: 20px;
  }

  @media only screen and (max-width: 768px) {
    margin: 10px 30px 0 0;
    a {
      strong {
        font-size: 13px;
      }
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
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
