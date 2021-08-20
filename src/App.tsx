import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import { useAppSelector, useAppDispatch } from './lib/hooks';
import { changeDark } from './lib/slices/appSlice';
import { light, dark } from './lib/theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const App: React.FC = () => {
  const mode = useAppSelector(state => state.counter.mode)
  const dispatch = useAppDispatch()

  const modeHandelChange = () => {
    dispatch(changeDark())
  }

  return (
    <ThemeProvider theme={mode ? dark : light} >
      <Router>
        <GlobalStyle />
        <Route path="/" exact>
          <MainPage onClick={modeHandelChange} />
        </Route>
      </Router>
    </ThemeProvider>
  );
}

export default App;
