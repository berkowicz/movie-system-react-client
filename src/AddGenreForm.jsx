import React, { useState } from 'react';
import axios from 'axios';

import * as URLS from './constants';

//Form to add genre to a specific user
function AddGenreForm() {
  const [genre, setGenre] = useState('');
  const [user, setUser] = useState('');

  const genres = [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Adventure',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 35,
      name: 'Comedy',
    },
    {
      id: 80,
      name: 'Crime',
    },
    {
      id: 99,
      name: 'Documentary',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 36,
      name: 'History',
    },
    {
      id: 27,
      name: 'Horror',
    },
    {
      id: 10402,
      name: 'Music',
    },
    {
      id: 9648,
      name: 'Mystery',
    },
    {
      id: 10749,
      name: 'Romance',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 10770,
      name: 'TV Movie',
    },
    {
      id: 53,
      name: 'Thriller',
    },
    {
      id: 10752,
      name: 'War',
    },
    {
      id: 37,
      name: 'Western',
    },
  ];

  //Updates ganre with changes in ganre input field
  function handleGenreChange(evt) {
    console.log(evt.target.value);
    setGenre(evt.target.value);
  }

  //Updates user with changes in user input field
  function handleUserChange(evt) {
    console.log(evt.target.value);
    setUser(evt.target.value);
  }

  //Handles button click for submit
  function handleSubmit(evt) {
    console.log(evt);
    addGenre(user, genre);
    evt.preventDefault();
  }

  //API request to add new genre
  async function addGenre(user, genre) {
    await axios
      .post(URLS.ADD_GENRE_BY_USERID_AND_GENREID(user, genre))
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
        <h2>Add Genre</h2>
        <label>
          <input
            type="text"
            placeholder="Input userID"
            onChange={handleUserChange}
          />
        </label>
        <label>
          <select value={genre} onChange={handleGenreChange}>
            <option value=""> - Please select a genre - </option>
            {genres.map((genre) => (
              <option value={genre.id}>{genre.name}</option>
            ))}
          </select>
        </label>
        <button type="submit">Add Genre</button>
      </form>
    </>
  );
}

export default AddGenreForm;
