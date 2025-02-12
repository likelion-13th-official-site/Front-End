export default function SecondSection() {
  return (
    <section className="max-w-[240rem] h-[46.8rem] bg-amber-800 py-[9.6rem] px-[1.2rem] gap-[2.4rem] flex justify-between max-md:flex-col  max-md:justify-start max-md:pt-0">
      <div className="leftsection flex justify-between w-full">
        <div className="cardinal flex flex-col gap-[1.2rem] max-md:hidden"></div>
        <div className="Leader text-surface-primary font-d2 font-[700] line-height-[1.4] text-[1.4rem]">
          아기사자
        </div>
      </div>

      <div className="rightSection w-full text-surface-primary font-d2 line-height-[1.4] text-[1.4rem] pl-[1.2rem] max-md:pl-0">
        <div>Coming soon.</div>
      </div>
    </section>
  );
}
