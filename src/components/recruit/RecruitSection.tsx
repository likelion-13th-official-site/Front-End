export default function RecruitSection({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="font-d2 w-full px-[1.6rem] md:px-[3.2rem] flex text-text-primary">
      {children}
    </section>
  );
}
