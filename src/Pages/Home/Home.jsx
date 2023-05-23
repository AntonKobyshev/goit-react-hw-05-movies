import { getTrendingMovies } from 'API/fetchMovies';
import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
