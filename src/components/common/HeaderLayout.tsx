import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';

export default function HeaderLayout() {
  return (
    <div className="w-full z-1000 flex flex-col items-center">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
