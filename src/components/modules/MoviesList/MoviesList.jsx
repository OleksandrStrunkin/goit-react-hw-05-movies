import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMoviesList } from '../shared/api/movies';

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
      <ol>{elements}</ol>
      {loading && <p>Loading ....</p>}
      {error && <p>Fail ....{error.message}</p>}
    </>
  );
}
