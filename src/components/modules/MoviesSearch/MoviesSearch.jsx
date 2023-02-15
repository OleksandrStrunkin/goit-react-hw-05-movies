import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ListItems from '../ListItems/ListItems';
import { getSearchMovies } from '../shared/api/movies';
import styles from './MoviesSearch.module.scss';
import { Audio } from 'react-loader-spinner';

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
        setItems(result.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (value) {
      fetchSearchMovies();
      setSearch(value);
    }
  }, [setError, setItems, setLoading, value]);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setValueParams({ query: search });
  };

  return (
    <>
      <div className={styles.Searchbar}>
        <form onSubmit={handleSubmit} className={styles.SearchForm}>
          <input
            name="search"
            value={search}
            onChange={handleChange}
            className={styles.SearchFormInput}
          ></input>
          <button type="submit" className={styles.SearchFormButton}>
            ../
          </button>
        </form>
      </div>
      <ListItems items={items} />
      {loading && <Audio />}
      {error && <p>Fail ....{error.message}</p>}
    </>
  );
}
