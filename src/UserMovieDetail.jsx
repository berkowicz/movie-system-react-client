import * as React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import * as URLS from './constants';
import UserMovie from './UserMovie';

//Gets movie and rating from specific user
function UserMovieDetail() {
  const [data, setData] = React.useState({ data: [] });

  let { userId } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(URLS.GET_MOVIES_AND_RATING_BY_USERID(userId));

      setData(result);
    };

    fetchData();
  }, []);

  //Return a list of movie and rating
  return (
    <>
      {data.data.map((movie) => (
        <UserMovie movie={movie.movie} rating={movie.rating} />
      ))}
    </>
  );
}

export default UserMovieDetail;
