import { createBrowserRouter } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import TrackPage from './pages/TrackPage';
import HeaderLayout from './components/common/HeaderLayout';
import ProjectsPage from './pages/ProjectsPage';
import PeoplePage from './pages/PeoplePage';
import ProjectsDetailPage from './pages/ProjectsDetailPage';
import ApplyPage from './pages/ApplyPage';
import RecruitPage from './pages/RecruitPage';
import CreditPage from './pages/CreditPage';
import ErrorPage from './pages/ErrorPage';
const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <AboutPage />
      },
      {
        path: 'track/:type',
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
        path: 'credits',
        element: <CreditPage />
      }
    ]
  },
  {
    errorElement: <ErrorPage />,
    path: 'apply',
    element: <ApplyPage />
  }
]);

export default router;
