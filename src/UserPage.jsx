import * as React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';

import UserMovieDetail from './UserMovieDetail';
import UserGenreDetail from './UserGenreDetail';
import AddGenreForm from './AddGenreForm';
import AddMovieForm from './AddMovieForm';
import AddRatingForm from './AddRatingForm';

function UserPage() {
  let match = useRouteMatch();
  console.log(match);

  //Prints userpage
  return (
    <>
      <Switch>
        <Route path={`${match.path}/:userId`}>
          <h1>Genres</h1>
          <AddGenreForm />
          <UserGenreDetail />
          <h1>Movies</h1>
          <AddMovieForm />
          <AddRatingForm />
          <UserMovieDetail />
        </Route>
        <Route path={match.path}>
          <h3>No user selected</h3>
        </Route>
      </Switch>
    </>
  );
}

export default UserPage;
