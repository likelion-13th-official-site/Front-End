import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';
import ScrollTop from '@/utils/ScrollTop';

export default function HeaderLayout() {
  return (
    <div className="w-full z-1000 flex flex-col items-center">
      <ScrollTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
