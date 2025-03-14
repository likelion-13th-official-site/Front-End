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
    <main className="main relative w-full flex items-center justify-center max-2xl:block">
      {/* AsciiArt - 왼쪽 영역 */}
      <div
        style={{ height: screenSize < 1100 ? height : '100vh' }}
        className="w-[50%] text-[20rem] flex items-center justify-center 
               fixed max-2xl:fixed top-0 left-0 h-full 
               max-2xl:w-[100%] max-2xl:left-auto max-2xl:h-[100vh]"
      >
        <AsciiArt />
      </div>

      {/* 빈 공간 - 데스크탑에서만 유지 */}
      <div className="w-[50%] max-2xl:hidden" />

      {/* 오른쪽 콘텐츠 영역 - 스크롤 효과 추가 */}
      <div
        style={{ marginTop: screenSize < 1100 ? height : '' }}
        className="w-[50%] pt-[12.8rem] px-[3.2rem] flex flex-col gap-[12.8rem] 
               max-2xl:w-[100%] max-2xl:z-10 max-2xl:relative 
               max-2xl:bg-text-invert max-2xl:pt-[3.2rem] max-2xl:px-[3.2rem] 
               max-md:pt-[1.6rem] max-md:px-[1.6rem] transition-transform duration-500"
        id="scroll-content"
      >
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
