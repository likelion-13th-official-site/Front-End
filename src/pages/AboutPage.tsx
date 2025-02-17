import AsciiArt from '@/components/AboutPage/AsciiArt';
import FifthSection from '@/components/AboutPage/FifthSection';
import FirstSection from '@/components/AboutPage/FirstSection';
import FourthSection from '@/components/AboutPage/FourthSection';
import SecondSection from '@/components/AboutPage/SecondSection';
import SeventhSection from '@/components/AboutPage/SeventhSection';
import SixthSection from '@/components/AboutPage/SixthSection';
import ThirdSection from '@/components/AboutPage/ThirdSection';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [height, setHeight] = useState(window.innerHeight);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="main relative w-full flex items-center justify-center max-2xl:block ">
      <div
        style={{ height: screenSize < 1100 ? height : '100vh' }} // 🔹 1100px 이상에서도 높이 유지
        className="w-[50%] text-[20rem] flex items-center justify-center fixed max-2xl:sticky top-0 left-0 h-full max-2xl:w-[100%] max-2xl:left-auto bg-gradient-to-r from-surface-tertiary from-0% via-surface-secondary via-27.5% to-text-primary to-90%"
      >
        <AsciiArt />
      </div>

      <div className="w-[50%] max-2xl:hidden" />

      <div className="w-[50%] py-[12.8rem] px-[3.2rem] flex flex-col gap-[12.8rem] max-2xl:w-[100%] max-2xl:z-2000 relative bg-text-invert max-2xl:py-[3.2rem]">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
      </div>
    </main>
  );
}
