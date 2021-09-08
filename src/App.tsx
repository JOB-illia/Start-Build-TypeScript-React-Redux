import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import MainPage from './pages/MainPage';
import theme from './lib/theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/" component={MainPage} exact />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
