import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { darken } from 'polished';
import 'react-toastify/dist/ReactToastify.css';

import { fadeIn } from 'react-animations';

export const fade = keyframes`${fadeIn}`;

export const ContentPage = styled.div`
  padding-top: 40px;
  & > *:not(:first-child):visible {
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

  .swal-overlay{
    background-color: rgba(255, 255, 255, 0.9);
  }
  .swal-modal{
    width: 490px;
    background: transparentrgba(255, 255, 255, 0.50);
  }
  .swal-title{
    font-size: 50px;
    color: #ff5700;
  }
  .swal-content{
    font-weight: 800;
    font-size: 17px;
    span{
      color: #ff5700;
    }
  }
  .swal-button{
    font-size: 20px;
    color: #ff5700;
    background: #fff;
    border: 1px solid rgba(255, 87, 0, 0.5);
    &:hover {
      background: ${darken(0.02, '#fff')} !important;
    }
    &:focus{
      box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(255, 87, 0,1);
    }

    &.swal-button--danger{
      background-color: #ff5700;
      color: #fff;
      &:hover {
        background: ${darken(0.02, '#ff5700')} !important;
      }
      &.swal-button--loading{
        color: #ff5700;
      }
    }
  }
`;
