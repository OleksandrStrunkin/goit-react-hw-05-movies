import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSearchMovies } from '../shared/api/movies';

export default function MoviesSearch() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    const fetchSearchMovies = async () => {
      setLoading(true);
      try {
        const result = await getSearchMovies(value);
        console.log(result);
        setItems(result.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (value !== '') {
      fetchSearchMovies();
    }
  }, [setError, setItems, setLoading, value]);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setValue(search);
    setSearch('');
  };

  const elements = items.map(item => (
    <li key={item.id}>
      <Link to={`/movies/${item.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt=""
          width={100}
        />
        {item.original_title || item.name}
      </Link>
    </li>
  ));
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Search
          <input name="search" value={search} onChange={handleChange}></input>
        </label>
        <button type="submit">search</button>
      </form>
      <ol>{elements}</ol>
      {loading && <p>Loading ....</p>}
      {error && <p>Fail ....{error.message}</p>}
    </>
  );
}
