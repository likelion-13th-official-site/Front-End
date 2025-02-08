import { createBrowserRouter } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import TrackPage from './pages/TrackPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <AboutPage />
    // errorElement:,
  },
  {
    path: 'track',
    element: <TrackPage />
    // errorElement:,
  }
]);

export default router;
