import { getMovieItem } from '../shared/api/movies';
import {
  Link,
  useParams,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MovieItem() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state;

  function goBack() {
    navigate(from);
  }

  useEffect(() => {
    const fetchMovieItem = async () => {
      setLoading(true);
      try {
        const result = await getMovieItem(params.id);
        setItem(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieItem();
  }, [params.id]);

  return (
    <>
      <button onClick={goBack}>Go back</button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt=""
        />
        <h2>{item.original_title || item.name}</h2>
        <div>Overview:{item.overview}</div>
        <div>{item.genres && item.genres.map(gen => gen.name)}</div>
      </div>
      {loading && <p>Loading ....</p>}
      {error && <p>Fail ....{error.message}</p>}
      <Link state={{ from }} to={`/movies/${item.id}/cast`}>
        Cast
      </Link>
      <Link state={{ from }} to={`/movies/${item.id}/reviews`}>
        Reviews
      </Link>
      <Outlet />
    </>
  );
}
