import styled, { createGlobalStyle } from 'styled-components';

export const ContentResults = styled.div`
  padding-top: 40px;
  & > *:not(:first-child) {
    margin-top: 40px;
  }
`;

export const SimpleInformation = styled.h2`
  display: flex;
  flex-direction: column;
  font-size: 50px;
  color: #c5c5c5;

  & span {
    font-size: 15px;
  }
`;

export const ContentScore = styled.span`
  background: #21c62c;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 50px;
  font-size: 25px;
  border-radius: 23px;
  color: #fff;
`;

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:100,200,400,700,700i&display=swap');

  *{
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus:{
    outline: 0;
  }

  html, body, #root{
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 15px 'Roboto Mono', monospace;
    color: #3E3E3E;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style:
  }

  button{
    cursor: pointer;
  }

  h1{
    font-size: 70px;
  }

  div.divider{
    height: 23px;
    border-right: 1px solid #C5C5C5;
    margin: 0 7px;
  }

  @media only screen and (max-width: 768px) {
    h1{
      font-size: 60px;
    }
  }
`;
