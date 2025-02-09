import { createBrowserRouter } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import TrackPage from './pages/TrackPage';
import ApplyPage from './pages/ApplyPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <AboutPage />
  },
  {
    path: 'track',
    element: <TrackPage />
  },
  {
    path: 'apply',
    element: <ApplyPage />
  }
]);

export default router;
