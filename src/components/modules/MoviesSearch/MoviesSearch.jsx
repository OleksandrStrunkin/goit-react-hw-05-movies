import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ListItems from '../ListItems/ListItems';
import { getSearchMovies } from '../shared/api/movies';

export default function MoviesSearch() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [valueParams, setValueParams] = useSearchParams();

  const value = valueParams.get('query');

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
    if (value) {
      fetchSearchMovies();
    }
  }, [setError, setItems, setLoading, value]);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setValueParams({ query: search });
    setSearch('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Search
          <input name="search" value={search} onChange={handleChange}></input>
        </label>
        <button type="submit">search</button>
      </form>
      <ListItems items={items} />
      {loading && <p>Loading ....</p>}
      {error && <p>Fail ....{error.message}</p>}
    </>
  );
}
