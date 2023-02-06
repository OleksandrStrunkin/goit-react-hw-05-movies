import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'components/modules/shared/api/movies';

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

  const elements = items.map(item => (
    <li key={item.id}>
      <img
        src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
        alt=""
        width={100}
      />
      <p>{item.original_name}</p>
      <p>Character:{item.character}</p>
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
