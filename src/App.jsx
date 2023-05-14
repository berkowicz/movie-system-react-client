import * as React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Hero from './Hero';
import UserList from './UserList';
import UserPage from './UserPage';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
`;

function App() {
  return (
    <Router>
      <MainContainer>
        <Hero /> //Header
        <Switch>
          <Route path="/user">
            <UserPage /> //Prints userpage with genres and movies
          </Route>
          <Route path="/">
            <UserList /> //Prints homepage with all users
          </Route>
        </Switch>
      </MainContainer>
    </Router>
  );
}

export default App;
