import { createBrowserRouter } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import TrackPage from './pages/TrackPage';
import HeaderLayout from './components/common/HeaderLayout';
const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    errorElement: <>error</>,
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
