// import React from 'react';

import FirstSection from '@/components/AboutPage/FirstSection';
import FourthSection from '@/components/AboutPage/FourthSection';
import SecondSection from '@/components/AboutPage/SecondSection';
import ThirdSection from '@/components/AboutPage/ThirdSection';

export default function AboutPage() {
  return (
    <main className="main w-full flex flex-col items-center justify-center">
      <FirstSection />

      <SecondSection />

      <ThirdSection />

      <FourthSection />
    </main>
  );
}
