import { createBrowserRouter, Outlet } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import TrackPage from './pages/TrackPage';
import HeaderLayout from './components/common/HeaderLayout';
import ProjectsPage from './pages/ProjectsPage';
import PeoplePage from './pages/PeoplePage';
import ApplyPage from './pages/ApplyPage';

const router = createBrowserRouter([
  {
    element: (
      <>
        <HeaderLayout />
        <Outlet />
      </>
    ),
    errorElement: <>error</>,
    children: [
      {
        path: '/',
        element: <AboutPage />
      },
      {
        path: 'track',
        element: <TrackPage />
      },
      {
        path: 'projects',
        element: <ProjectsPage />
      },
      {
        path: 'people',
        element: <PeoplePage />
      }
    ]
  },
  {
    path: 'apply',
    element: <ApplyPage />
  }
]);

export default router;
