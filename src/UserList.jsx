import * as React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

import User from './User';
import * as URLS from './constants';

//export const API_PREFIX = 'https://localhost:7048';

const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

function UserList(props) {
  const [user, setUser] = React.useState({ data: [] });
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(URLS.GET_USERS);
      //console.log(result);
      setUser(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <UserListContainer>
        {user.data.map((user) => (
          <Link to={`/user/${user.id}`} key={user.id}>
            <User name={user.name} email={user.email} />
          </Link>
        ))}
      </UserListContainer>
    </>
  );
}

export default UserList;
