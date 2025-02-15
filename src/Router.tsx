import { createBrowserRouter, Outlet } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import TrackPage from './pages/TrackPage';
import HeaderLayout from './components/common/HeaderLayout';
import ProjectsPage from './pages/ProjectsPage';
import PeoplePage from './pages/PeoplePage';
import ProjectsDetailPage from './pages/ProjectsDetailPage';
import RecruitPage from './pages/RecruitPage';
import CreditPage from './pages/CreditPage';
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
      },
      {
        path: 'projects/:id',
        element: <ProjectsDetailPage />
      },
      {
        path: 'recruit',
        element: <RecruitPage />
      },
      {
        path: 'credit',
        element: <CreditPage />
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
