import RecruitFAQ from '@/components/recruit/section-items/RecruitFAQ';
import RecruitHeader from '@/components/recruit/RecruitHeader';
import RecruitQualifications from '@/components/recruit/section-items/RecruitQualifications';
import RecruitSchedule from '@/components/recruit/section-items/RecruitSchedule';
import RecruitSection from '@/components/recruit/RecruitSection';
import RecruitTracks from '@/components/recruit/section-items/RecruitTracks';
import { useEffect, useState } from 'react';

export default function RecruitPage() {
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
    <main
      id="recruit-main"
      className="flex flex-col 2xl:grid 2xl:grid-cols-2 w-full relative"
    >
      {/* 🔹 첫 번째 섹션 (고정 배너 역할) */}
      <div className="w-[100vw] 2xl:w-[50vw] h-screen max-2xl:fixed top-0 left-0 flex items-center justify-center bg-white">
        <RecruitHeader />
      </div>

      {/* 🔹 두 번째 섹션 (스크롤 시 올라오는 컨텐츠) */}
      <div
        style={{ marginTop: screenSize < 1100 ? height : '' }}
        className="w-full flex flex-col min-h-screen pt-[12.8rem] gap-[12.8rem] items-center col-start-2 relative bg-gray-100"
      >
        <RecruitSection>
          <RecruitTracks />
        </RecruitSection>
        <RecruitSection>
          <RecruitSchedule />
        </RecruitSection>
        <RecruitSection>
          <RecruitQualifications />
        </RecruitSection>
        <RecruitSection>
          <RecruitFAQ />
        </RecruitSection>
      </div>
    </main>
  );
}
