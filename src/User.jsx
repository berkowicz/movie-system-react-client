import React from 'react';
import styled from 'styled-components';

const UserContainer = styled.div`
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

const UserEmail = styled.p`
  padding: 1em;
`;

//Prints Users on homepage
function User(props) {
  return (
    <UserContainer>
      <h1>{props.name}</h1>
      <UserEmail>{props.email}</UserEmail>
    </UserContainer>
  );
}

export default User;
