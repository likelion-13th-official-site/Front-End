import { createBrowserRouter } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import TrackPage from './pages/TrackPage';
const router = createBrowserRouter([
  {
    element: <></>,
    errorElement: <></>,
    children: [
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
    ]
  },
  {
    element: <></>,
    errorElement: <></>,
    children: []
  }
]);

export default router;
