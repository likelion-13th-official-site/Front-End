import RecruitFAQ from '@/components/recruit/section-items/RecruitFAQ';
import RecruitHeader from '@/components/recruit/RecruitHeader';
import RecruitQualifications from '@/components/recruit/section-items/RecruitQualifications';
import RecruitSchedule from '@/components/recruit/section-items/RecruitSchedule';
import RecruitSection from '@/components/recruit/RecruitSection';
import RecruitTracks from '@/components/recruit/section-items/RecruitTracks';
import { useNavigate } from 'react-router-dom';

export default function RecruitPage() {
  const navigate=useNavigate();

  return (
    <main id="recruit-main bg-surface-primary">
      <RecruitHeader />
      <button className="cursor-pointer hidden md:block w-screen h-[10rem] font-d2 text-[2rem] font-[700] leading-[140%] text-text-primary border border-text-primary hover:bg-text-primary hover:text-surface-primary" onClick={()=>navigate('/apply')}>
        지원하기
      </button>
      <button className="block md:hidden w-screen h-[10rem] font-d2 text-[2rem] font-[700] leading-[140%] text-text-primary border border-text-primary">
        PC에서만 지원 가능합니다.
      </button>
      <div className="w-screen flex flex-col items-center">
        <RecruitSection title="Tracks">
          <RecruitTracks />
        </RecruitSection>
        <RecruitSection title="Schedule">
          <RecruitSchedule />
        </RecruitSection>
        <RecruitSection title="Qualifications">
          <RecruitQualifications />
        </RecruitSection>
        <RecruitSection title="FAQ">
          <RecruitFAQ />
        </RecruitSection>
      </div>
    </main>
  );
}
