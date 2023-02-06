import { Route, Routes } from 'react-router-dom';

import MovieItem from '../modules/MovieItem/MovieItem';
import CastPage from './CastPage/CastPage';
import HomePage from './HomePage/HomePage';
import MoviesPage from './MoviesPage/MoviesPage';
import NotFoundPage from './NoFoundPage/NotFoundPage';
import ReviewsPage from './ReviewsPage/ReviewsPage';

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/:id" element={<MovieItem />}>
        <Route path="cast" element={<CastPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
