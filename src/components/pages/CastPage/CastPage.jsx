import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'components/modules/shared/api/movies';
import styles from './CastPage.module.scss';
import photo from '../NoFoundPage/notFound.jpg';
import { Audio } from 'react-loader-spinner';

export default function CastPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      setLoading(true);
      try {
        const result = await getCast(params.id);
        setItems(result.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [params.id, setError, setItems, setLoading]);

  const elements = items.map(item => {
    return (
      <li key={item.id} className={styles.listItem}>
        {item.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${item.profile_path}` || photo}
            alt={item.original_name}
            width={200}
          />
        ) : (
          <img src={photo} alt={item.original_name} width={200} />
        )}
        <p className={styles.name}>{item.original_name}</p>
        <p className={styles.text}>
          <span>Character:</span>
          {item.character}
        </p>
      </li>
    );
  });

  return (
    <>
      <ul className={styles.castList}>{elements}</ul>
      {loading && <Audio />}
      {error && <p>Fail ....{error.message}</p>}
    </>
  );
}
