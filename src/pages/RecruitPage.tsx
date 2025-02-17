import RecruitFAQ from '@/components/recruit/section-items/RecruitFAQ';
import RecruitHeader from '@/components/recruit/RecruitHeader';
import RecruitQualifications from '@/components/recruit/section-items/RecruitQualifications';
import RecruitSchedule from '@/components/recruit/section-items/RecruitSchedule';
import RecruitSection from '@/components/recruit/RecruitSection';
import RecruitTracks from '@/components/recruit/section-items/RecruitTracks';

export default function RecruitPage() {
  return (
    <main
      id="recruit-main"
      className="flex flex-col 2xl:grid 2xl:grid-cols-2 w-full"
    >
      <div className="2xl:fixed w-[100vw] 2xl:w-[50vw] h-screen">
        <RecruitHeader />
      </div>
      <div className="w-full flex flex-col pt-[12.8rem] gap-[12.8rem] items-center col-start-2">
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
