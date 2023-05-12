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
import UserGenre from './UserGenre';

function UserGenreDetail() {
  const [data, setData] = React.useState({ data: [] });
  // Object destructuring:
  let { userId } = useParams();

  //console.log(URLS.GET_GENRES_BY_USERID);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(URLS.GET_GENRES_BY_USERID(userId));
      //console.log(result);
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <>
      {data.data.map((genre) => (
        <UserGenre title={genre.title} />
      ))}
    </>
  );
}

export default UserGenreDetail;
