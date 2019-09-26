import styled from 'styled-components';

export const UserProfile = styled.aside`
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
