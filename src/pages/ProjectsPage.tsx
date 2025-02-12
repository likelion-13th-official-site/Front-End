import ProjectsList from '@/components/projects/ProjectsList';

const tabList = ['ALL', '13th', '12th', '11th'];

export default function ProjectsPage() {
  return (
    <main
      id="projects-main"
      className="mt-[4.7rem] py-[9.6rem] font-d2 text-text-primary"
    >
      <div id="tab-wrapper" className="grid grid-cols-2 gap-[2.4rem]">
        <ul
          id="tab-list"
          className="flex gap-[1.2rem] text-[1.4rem] font-normal col-start-2"
        >
          <span className="opacity-40">SHOW:</span>
          {tabList.map((tab, index) => (
            <li key={index} className="opacity-40">
              {tab}
            </li>
          ))}
        </ul>
      </div>
      <ProjectsList />
    </main>
  );
}
