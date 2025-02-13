import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import TrackPage from './pages/TrackPage';
import HeaderLayout from './components/common/HeaderLayout';
import ProjectsPage from './pages/ProjectsPage';
import PeoplePage from './pages/PeoplePage';
import ApplyPage from './pages/ApplyPage';
import ProjectsDetailPage from './pages/ProjectsDetailPage';
import RecruitPage from './pages/RecruitPage';

const RootLayout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/apply' && <HeaderLayout />}
      <Outlet />
    </>
  );
};

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
      },
      { path: 'apply', element: <ApplyPage /> }
    ]
  },
  {
    element: <></>,
    errorElement: <></>,
    children: []
  }
]);

export default router;
