import styled,{ createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body{
    font-family: sans-serif;
    background: ${colors.darkPrimaria};
    color: ${colors.darkPrimaria};
  }

  html, body, #root{
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.corPrimaria};
    border: none;
    color: #eee;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms;
  }

  button:hover{
    filter: brightness(75%);
  }

  a {
    text-decoration: none;
    color: ${colors.corPrimaria};
  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.sucessoCor};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorCor};
  }
`;

export const Container = styled.section`
  max-width: 500px;
  background: #eee;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;