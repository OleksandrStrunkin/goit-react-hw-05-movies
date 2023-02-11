import { Link, useLocation } from 'react-router-dom';
import styles from './ListItems.module.scss';
import PropTypes from 'prop-types';

export default function ListItems({ items }) {
  const location = useLocation();
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item.id} className={styles.ListItem}>
          <Link
            to={`/movies/${item.id}`}
            state={{ from: location }}
            className={styles.link}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt=""
            />
            <p className={styles.name}>{item.original_title || item.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

ListItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      original_title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
