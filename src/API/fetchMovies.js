import axios from 'axios';

const searchParams = new URLSearchParams({
  api_key: 'b0cde6bcd1647f8df32fb28311129fbd',
  language: 'en-US',
  include_adult: false,
});

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/all/week?${searchParams}`);
  return data.results;
};

export const fetchMovieDetails = async id => {
  const { data } = await axios.get(`/movie/${id}?${searchParams}`);
  return data;
};

export const fetchMovieByName = async name => {
  const { data } = await axios.get(`/search/movie?${searchParams}&query=${name}`);
  return data.results;
};

export const fetchMovieCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?${searchParams}`);
  return data.cast;
};

export const fetchMovieReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?${searchParams}`);
  return data.results;
};