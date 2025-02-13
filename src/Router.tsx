import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import TrackPage from './pages/TrackPage';
import HeaderLayout from './components/common/HeaderLayout';
import ProjectsPage from './pages/ProjectsPage';
import PeoplePage from './pages/PeoplePage';
import ApplyPage from './pages/ApplyPage';

const RootLayout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/apply' && <HeaderLayout />}
      <Outlet />
    </>
  );
};

import ProjectsDetailPage from './pages/ProjectsDetailPage';
import RecruitPage from './pages/RecruitPage';
const router = createBrowserRouter([
  {
    element: <RootLayout />,
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
      },
      {
        path: 'projects/:id',
        element: <ProjectsDetailPage />
      },
      {
        path: 'recruit',
        element: <RecruitPage />
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
