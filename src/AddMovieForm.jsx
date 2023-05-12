import React, { useState } from 'react';
import axios from 'axios';

import * as URLS from './constants';

function AddMovieForm() {
  const [movie, setMovie] = useState('');
  const [user, setUser] = useState('');
  const [genre, setGenre] = useState('');

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

  function handleGenreChange(evt) {
    console.log(evt.target.value);
    setGenre(evt.target.value);
  }

  function handleMovieChange(evt) {
    console.log(evt.target.value);
    setMovie(evt.target.value);
  }

  function handleUserChange(evt) {
    console.log(evt.target.value);
    setUser(evt.target.value);
  }

  function handleSubmit(evt) {
    console.log(evt);
    addMovie(user, genre, movie);
    evt.preventDefault();
  }

  async function addMovie(user, genre, movie) {
    await axios
      .post(URLS.ADD_MOVIE_BY_USERID_GENREID_AND_MOVIENAME(user, genre, movie))
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
        <h2>Add movie</h2>
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
          <select value={genre} onChange={handleGenreChange}>
            <option value=""> - Please select a genre - </option>
            {genres.map((genre) => (
              <option value={genre.id}>{genre.name}</option>
            ))}
          </select>
        </label>
        <button type="submit">Add Movie</button>
      </form>
    </>
  );
}

export default AddMovieForm;
