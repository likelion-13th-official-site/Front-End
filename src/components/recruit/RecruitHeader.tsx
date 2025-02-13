import DdayCounter from './DDayCounter';

export default function RecruitHeader() {
  return (
    <section
      id="recruit-header"
      className="blueBackground pt-[14.3rem] md:pt-[26.6rem] 2xl:pt-[14.3rem] pb-[9.6rem] w-screen md:grid grid-cols-2 gap-[1rem] bg-gradient-to-r from-surface-tertiary from-0% via-surface-secondary via-27.5% to-text-primary to-90% text-text-invert font-d2"
    >
      <div id="header-left" className="hidden md:grid grid-cols-2 gap-[1.2rem]">
        <h1 className="col-start-2 text-[1.4rem] font-[700] leading-[140%]">
          Apply Now!
        </h1>
      </div>
      <div
        id="header-right"
        className="w-full px-[1.2rem] flex flex-col gap-[1.6rem]"
      >
        <h2 className="text-[1.4rem] font-[400] leading-[140%]">
          1차 서류 마감까지
        </h2>
        <DdayCounter />
      </div>
    </section>
  );
}
