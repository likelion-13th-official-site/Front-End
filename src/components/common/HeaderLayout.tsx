import { Outlet } from 'react-router-dom';
import Header from './header/Header';

export default function HeaderLayout() {
  return (
    <div className="w-screen">
      <Header />
      <Outlet />
    </div>
  );
}
