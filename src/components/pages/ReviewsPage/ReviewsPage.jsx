import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/modules/shared/api/movies';
import styles from './ReviewsPage.module.scss';
import { Audio } from 'react-loader-spinner';

export default function ReviewsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const result = await getReviews(params.id);
        setItems(result.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [params.id, setError, setItems, setLoading]);

  const elements = items.map(item => (
    <li key={item.id} className={styles.item}>
      <h2>
        <span>Author:</span>
        {item.author}
      </h2>
      <p>{item.content}</p>
    </li>
  ));
  return (
    <>
      {items.length > 0 ? (
        <ul className={styles.listItems}>{elements}</ul>
      ) : (
        <p>No found review</p>
      )}
      {loading && <Audio />}
      {error && <p>Fail ....{error.message}</p>}
    </>
  );
}
