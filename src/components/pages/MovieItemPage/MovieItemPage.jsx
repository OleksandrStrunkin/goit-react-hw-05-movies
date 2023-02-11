import { getMovieItem } from '../../modules/shared/api/movies';
import { nanoid } from 'nanoid';
import {
  Link,
  useParams,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './MovieItemPage.module.scss';
import photo from '../NoFoundPage/notFound.jpg';
import { Audio } from 'react-loader-spinner';

export default function MovieItemPage() {
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

  const date = item.release_date;

  return (
    <>
      <button onClick={goBack} className={styles.button}>
        Go back
      </button>
      <div className={styles.movieBox}>
        {item.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}` || photo}
            alt={item.original_title || item.name}
            width={400}
            className={styles.poster}
          />
        ) : (
          <img
            src={photo}
            alt={item.original_title || item.name}
            width={400}
            className={styles.poster}
          />
        )}
        <div>
          <h2 className={styles.title}>
            {item.original_title || item.name}
            {date ? `(${date.slice(0, 4)})` : ''}
          </h2>
          <p>
            User Score:{' '}
            {item.vote_average ? (item.vote_average * 10).toFixed(0) : ''}%
          </p>
          <h3 className={styles.discription}>Overview</h3>
          <p className={styles.text}>{item.overview}</p>
          <h3 className={styles.discription}>Genres</h3>
          <p className={styles.text}>
            {item.genres &&
              item.genres.map(gen => (
                <span key={nanoid()} className={styles.gen}>
                  {gen.name}
                </span>
              ))}
          </p>
        </div>
      </div>
      {loading && <Audio />}
      {error && <p>Fail ....{error.message}</p>}
      <p className={styles.info}>Additional information</p>
      <div className={styles.boxBtn}>
        <Link
          state={{ from }}
          to={`/movies/${item.id}/cast`}
          className={styles.button}
        >
          Cast
        </Link>
        <Link
          state={{ from }}
          to={`/movies/${item.id}/reviews`}
          className={styles.button}
        >
          Reviews
        </Link>
      </div>
      <Outlet />
    </>
  );
}
