import { createBrowserRouter } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import TrackPage from './pages/TrackPage';
import HeaderLayout from './components/common/HeaderLayout';
import ApplyPage from './pages/ApplyPage';

const router = createBrowserRouter([
  // {
  //   element: <HeaderLayout />,
  //   errorElement: <>error</>,
  //   children: [
  //     {
  //       path: '/',
  //       element: <AboutPage />
  //       // errorElement:,
  //     },
  //     {
  //       path: 'track',
  //       element: <TrackPage />
  //       // errorElement:,
  //     },
  //     {
  //       path: 'apply',
  //       element: <ApplyPage />
  //     }
  //   ]
  // },
  // {
  //   element: <></>,
  //   errorElement: <></>,
  //   children: []
  // }
  {
    path: '/',
    element: <AboutPage />
    // errorElement:,
  },
  {
    path: 'track',
    element: <TrackPage />
    // errorElement:,
  },
  {
    path: 'apply',
    element: <ApplyPage />
  }
]);

export default router;
