import RecruitFAQ from '@/components/recruit/section-items/RecruitFAQ';
import RecruitHeader from '@/components/recruit/RecruitHeader';
import RecruitQualifications from '@/components/recruit/section-items/RecruitQualifications';
import RecruitSchedule from '@/components/recruit/section-items/RecruitSchedule';
import RecruitSection from '@/components/recruit/RecruitSection';
import RecruitTracks from '@/components/recruit/section-items/RecruitTracks';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function RecruitPage() {
  const navigate = useNavigate();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      id="recruit-main bg-surface-primary"
    >
      <RecruitHeader />
      <div>
        <button
          className="cursor-pointer hidden md:block w-screen h-[10rem] font-d2 text-[2rem] font-[700] leading-[140%] text-text-primary border-y border-text-primary hover:bg-text-primary hover:text-surface-primary"
          onClick={() => navigate('/apply')}
        >
          지원하기
        </button>
        <button className="block md:hidden w-screen h-[10rem] font-d2 text-[2rem] font-[700] leading-[140%] text-text-primary border-y border-text-primary">
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
      </div>
    </motion.main>
  );
}
