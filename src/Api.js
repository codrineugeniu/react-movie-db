import axios from 'axios'

import { ImdbApiKey } from './AppConfig'

const ImdbApiUrl = 'http://imdbapi.net/api' //'http://imdbapi.net/api'
const MovieApiUrl = '/api/movies' //'http://localhost:5000/movies'

export function getMovies() {
  return axios.get(MovieApiUrl)
}

export function searchMovie(term) {
  return axios.post(ImdbApiUrl, {
    key: ImdbApiKey,
    title: term
  })
}

export function createMovie(movie) {
  return axios.post(MovieApiUrl, movie)
}
// DELETE /movie/<movie_id>
export function deleteMovie(id) {
  console.log('API method hit')
  return axios.delete(`${MovieApiUrl}/${id}`)
}
