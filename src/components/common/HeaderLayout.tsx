import { Outlet } from 'react-router-dom';
import Header from './header/Header';

export default function HeaderLayout() {
  return (
    <div className="w-full bg-surface-primary flex flex-col items-center">
      <Header />
      <Outlet />
    </div>
  );
}
