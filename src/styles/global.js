import styled, { keyframes, createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import { fadeIn } from 'react-animations';
export const fade = keyframes`${fadeIn}`;

export const ContentPage = styled.div`
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
  animation: 0.3s ${fade} ease;

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
  height: 40px;
  font-size: 25px;
  border-radius: 17px;
  color: #fff;
`;

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:100,200,400,700,700i&display=swap');

  * {
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 15px 'Roboto Mono', monospace;
    color: #3E3E3E;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  h1 {
    font-size: 70px;
  }

  div.divider {
    height: 23px;
    border-right: 1px solid #C5C5C5;
    margin: 0 7px;
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 60px;
    }
  }
`;
