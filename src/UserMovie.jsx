import React from 'react';
import styled from 'styled-components';

const UserMovieContainer = styled.div`
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

//Return movie name and move rating to UserMovieDetail
function UserMovie(props) {
  return (
    <UserMovieContainer>
      <h1>Title: {props.movie}</h1>
      <h1>Rating: {props.rating}</h1>
    </UserMovieContainer>
  );
}

export default UserMovie;
