import { Link, useLocation } from 'react-router-dom';

export default function ListItems({ items }) {
  const location = useLocation();
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt=""
              width={100}
            />
            {item.original_title || item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
