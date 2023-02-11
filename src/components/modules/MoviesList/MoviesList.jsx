import { useState, useEffect } from 'react';
import ListItems from '../ListItems/ListItems';
import { getMoviesList } from '../shared/api/movies';
import { Audio } from 'react-loader-spinner';

export default function MoviesList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesList = async () => {
      setLoading(true);
      try {
        const result = await getMoviesList();
        setItems(result.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesList();
  }, [setError, setItems, setLoading]);

  return (
    <>
      <ListItems items={items} />
      {loading && <Audio />}
      {error && <p>Fail ....{error.message}</p>}
    </>
  );
}
