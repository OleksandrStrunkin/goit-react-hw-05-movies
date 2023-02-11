import Menu from './modules/Menu/Menu';
import UserRoutes from './pages/UserPages';

export const App = () => {
  return (
    <div className="container">
      <Menu />
      <UserRoutes />
    </div>
  );
};
