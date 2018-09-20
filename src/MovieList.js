import React from 'react'
import MovieItem from './MovieItem'
import SearchBar from './components/SearchBar'

import './MovieList.css'

function MovieList(props) {
  const { movies = [], addMovie, deleteMovie } = props
  return (
    <div className="movie-list">
      <div className="search-container">
        <SearchBar addMovie={addMovie} />
      </div>
      <div className="movies-container">
        {movies.length > 0
          ? movies.map(movie => (
              <MovieItem
                title={movie.name}
                url={movie.poster}
                year={movie.year}
                plot={movie.plot}
                key={movie.id}
                deleteMovie={deleteMovie}
                id={movie.id}
                rating={movie.rating}
              />
            ))
          : 'No movies found. Perhaps add one?'}
      </div>
    </div>
  )
}

export default MovieList
