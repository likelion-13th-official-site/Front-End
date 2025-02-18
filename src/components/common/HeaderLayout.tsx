import { useLocation, useOutlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';
import ScrollTop from '@/utils/ScrollTop';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

export default function HeaderLayout() {
  return (
    <div className="w-full z-1000 flex flex-col items-center">
      <ScrollTop />
      <Header />
      <AnimatedOutlet />
      <Footer />
    </div>
  );
}

const AnimatedOutlet = (): React.JSX.Element => {
  const location = useLocation();
  const element = useOutlet();

  return (
    <AnimatePresence mode="wait" initial={true}>
      {element && React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
};
