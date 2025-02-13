export default function RecruitSection({
  children,
  title
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="font-d2 max-w-[151.2rem] w-screen px-[1.2rem] py-[9.6rem] flex flex-col md:grid grid-cols-2 gap-[2.4rem] text-text-primary">
      <div className="grid grid-cols-2 gap-[1.2rem]">
        <h1 className="hidden md:block col-start-2 text-[1.4rem] font-[700] leadint-[140%]">
          {title}
        </h1>
      </div>
      {children}
    </section>
  );
}
