import { createBrowserRouter } from 'react-router-dom';
import AboutPage from './pages/AboutPage';

const Router = createBrowserRouter([
  {
    path: '/',
    // errorElement:,
    children: [{ path: '', element: <AboutPage /> }]
  }
]);

export default Router;
