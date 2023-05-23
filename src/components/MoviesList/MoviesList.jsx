import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultMovieImg from 'images/movie-poster-default.webp';
import {
  MovieList,
  MovieItem,
  MovieLink,
  MovieImg,
  MovieName,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <MovieList>
      {movies.map(({ id, title, poster_path }) => (
        <MovieItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <MovieImg src={ poster_path ? imgBaseUrl.concat(poster_path) : defaultMovieImg} alt={title} />
            <MovieName>{title}</MovieName>
          </MovieLink>
        </MovieItem>
      ))}
    </MovieList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
   })
  ).isRequired,
};