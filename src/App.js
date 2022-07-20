/* eslint-disable import/no-cycle */
import './App.css';
import { createGlobalStyle } from 'styled-components';
import LoginPass from './components/Login';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: consolas;
    box-sizing: border-box;
  }
`;

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <LoginPass />
    </div>
  );
}
