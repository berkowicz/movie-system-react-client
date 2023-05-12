import * as React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';

import UserMovieDetail from './UserMovieDetail';
import UserGenreDetail from './UserGenreDetail';

function UserPage() {
  let match = useRouteMatch();
  console.log(match);

  return (
    <>
      <Switch>
        <Route path={`${match.path}/:userId`}>
          <h1>Genres</h1>
          <UserGenreDetail />
          <h1>Movies</h1>
          <UserMovieDetail />
        </Route>
        <Route path={match.path}>
          <h3>Go back and click a movie please.</h3>
        </Route>
      </Switch>
    </>
  );
}

export default UserPage;
