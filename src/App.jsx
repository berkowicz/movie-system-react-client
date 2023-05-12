import * as React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

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
        <Hero />
        <Switch>
          <Route path="/user">
            <UserPage />
          </Route>
          <Route path="/">
            <UserList />
          </Route>
        </Switch>
      </MainContainer>
    </Router>
  );
}

export default App;
