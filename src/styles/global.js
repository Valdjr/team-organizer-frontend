import { createGlobalStyle } from 'styled-components';

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
  }

`;
