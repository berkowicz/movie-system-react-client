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

import * as URLS from './constants';
import UserMovie from './UserMovie';

function UserMovieDetail() {
  const [data, setData] = React.useState({ data: [] });
  // Object destructuring:
  let { userId } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(URLS.GET_MOVIES_AND_RATING_BY_USERID(userId));
      //console.log(result);
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <>
      {data.data.map((movie) => (
        <UserMovie movie={movie.movie} rating={movie.rating} />
      ))}
    </>
  );
}

export default UserMovieDetail;
