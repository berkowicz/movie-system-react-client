import React, { useState } from 'react';
import axios from 'axios';

import * as URLS from './constants';

//Form to add rating to a specific movie and user
function AddRatingForm() {
  const [movie, setMovie] = useState('');
  const [user, setUser] = useState('');
  const [rating, setRating] = useState('');

  const ratings = [1, 2, 3, 4, 5];

  //Updates rating with changes in rating input field
  function handleRatingChange(evt) {
    console.log(evt.target.value);
    setRating(evt.target.value);
  }

  //Updates movie with changes in movie input field
  function handleMovieChange(evt) {
    console.log(evt.target.value);
    setMovie(evt.target.value);
  }

  //Updates user with changes in user input field
  function handleUserChange(evt) {
    console.log(evt.target.value);
    setUser(evt.target.value);
  }

  //Handles button click for submit
  function handleSubmit(evt) {
    console.log(evt);
    addRating(user, rating, movie);
    evt.preventDefault();
  }

  //API request to add new rating
  async function addRating(user, rating, movie) {
    await axios
      .post(URLS.ADD_RATING_BY_USERID_RATING_AND_MOVIENAME(user, rating, movie))
      .then(() => {
        console.log('Added');
      })
      .catch(() => {
        console.log('Something went wrong');
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add Rating</h2>
        <label>
          <input
            type="text"
            placeholder="Input userID"
            onChange={handleUserChange}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Input Movie Name"
            onChange={handleMovieChange}
          ></input>
        </label>
        <label>
          <select value={rating} onChange={handleRatingChange}>
            <option value=""> - Please select a rating - </option>
            {ratings.map((rating) => (
              <option value={rating}>{rating}</option>
            ))}
          </select>
        </label>
        <button type="submit">Add Rating</button>
      </form>
    </>
  );
}

export default AddRatingForm;
