import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { getMovieByName } from 'API/fetchMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }
    getMovieByName(query).then(setMovies);
  }, [searchParams]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      Notify.failure('Enter a query name.');
      return;
    }
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <>
      <SearchBox
        defaultValue={searchParams.get('query')}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
