import FirstSection from '@/components/AboutPage/FirstSection';
import SecondSection from '@/components/AboutPage/SecondSection';

import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';

const ThirdSection = lazy(() => import('@/components/AboutPage/ThirdSection'));
const FourthSection = lazy(
  () => import('@/components/AboutPage/FourthSection')
);
const FifthSection = lazy(() => import('@/components/AboutPage/FifthSection'));
const SixthSection = lazy(() => import('@/components/AboutPage/SixthSection'));
const SeventhSection = lazy(
  () => import('@/components/AboutPage/SeventhSection')
);

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="main w-full flex flex-col items-center justify-center pt-[5.752rem] max-2xl:pt-[18.2rem] max-md:pt-[5.752rem]"
    >
      <FirstSection />

      <SecondSection />

      <Suspense
        fallback={<div className="h-40 w-full bg-gray-200 animate-pulse"></div>}
      >
        <ThirdSection />
      </Suspense>

      <Suspense
        fallback={<div className="h-40 w-full bg-gray-200 animate-pulse"></div>}
      >
        <FourthSection />
      </Suspense>

      <Suspense
        fallback={<div className="h-40 w-full bg-gray-200 animate-pulse"></div>}
      >
        <FifthSection />
      </Suspense>

      <Suspense
        fallback={<div className="h-40 w-full bg-gray-200 animate-pulse"></div>}
      >
        <SixthSection />
      </Suspense>

      <Suspense
        fallback={<div className="h-40 w-full bg-gray-200 animate-pulse"></div>}
      >
        <SeventhSection />
      </Suspense>
    </motion.main>
  );
}
