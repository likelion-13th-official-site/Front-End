import AsciiArt from '@/components/AboutPage/AsciiArt';

import FirstSection from '@/components/AboutPage/FirstSection';
import SecondSection from '@/components/AboutPage/SecondSection';

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
    <main className="main w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-screen grid grid-rows-[4fr_1fr] 2xl:grid-rows-[5fr_1fr]">
        <AsciiArt />
        <FirstSection />
      </div>

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
    </main>
  );
}
