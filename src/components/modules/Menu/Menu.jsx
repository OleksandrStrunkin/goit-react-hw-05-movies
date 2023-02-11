import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

export default function Menu() {
  return (
    <ul className={styles.listItem}>
      <li>
        <NavLink to="/" className={styles.button}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className={styles.button}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
}
