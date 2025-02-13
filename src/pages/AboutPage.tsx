// import React from 'react';

import { companyList } from '@/components/AboutPage/companyList';
import FifthSection from '@/components/AboutPage/FifthSection';
import FirstSection from '@/components/AboutPage/FirstSection';
import FourthSection from '@/components/AboutPage/FourthSection';
import SecondSection from '@/components/AboutPage/SecondSection';
import SeventhSection from '@/components/AboutPage/SeventhSection';
import SixthSection from '@/components/AboutPage/SixthSection';
import ThirdSection from '@/components/AboutPage/ThirdSection';

export default function AboutPage() {
  return (
    <main className="main w-full flex flex-col items-center justify-center">
      <FirstSection />

      <SecondSection />

      <ThirdSection />

      <FourthSection />

      <FifthSection />

      <SixthSection />

      <SeventhSection />
    </main>
  );
}
