import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const MovieItemPage = lazy(() => import('./MovieItemPage/MovieItemPage'));
const CastPage = lazy(() => import('./CastPage/CastPage'));
const HomePage = lazy(() => import('./HomePage/HomePage'));
const MoviesPage = lazy(() => import('./MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('./NoFoundPage/NotFoundPage'));
const ReviewsPage = lazy(() => import('./ReviewsPage/ReviewsPage'));

export default function UserRoutes() {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieItemPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
