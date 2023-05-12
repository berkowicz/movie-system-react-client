import React from 'react';
import styled from 'styled-components';

const UserGenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: auto;
  width: 25em;
  //background: red;
  border: 2px solid black;
  margin-bottom: 1em;
`;

function UserGenre(props) {
  return (
    <UserGenreContainer>
      <h1>{props.title}</h1>
    </UserGenreContainer>
  );
}

export default UserGenre;
