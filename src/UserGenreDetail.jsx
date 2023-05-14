import * as React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, useParams } from 'react-router-dom';

import * as URLS from './constants';
import UserGenre from './UserGenre';

//Gets genres
function UserGenreDetail() {
  const [data, setData] = React.useState({ data: [] });

  let { userId } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(URLS.GET_GENRES_BY_USERID(userId));
      //console.log(result);
      setData(result);
    };

    fetchData();
  }, []);

  //Return a list of genres
  return (
    <>
      {data.data.map((genre) => (
        <UserGenre title={genre.title} />
      ))}
    </>
  );
}

export default UserGenreDetail;
