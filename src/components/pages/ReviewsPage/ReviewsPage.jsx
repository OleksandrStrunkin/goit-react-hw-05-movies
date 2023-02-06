import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/modules/shared/api/movies';

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
    <li key={item.id}>
      <h2>{item.author}</h2>
      <p>{item.content}</p>
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
