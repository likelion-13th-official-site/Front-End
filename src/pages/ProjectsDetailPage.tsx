import { projectDetailData } from '@/components/projects/projectsData';
import { useParams } from 'react-router-dom';

export default function ProjectsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projectDetailData(Number(id));

  return (
    <main
      id="projects-detail -main"
      className="flex justify-center w-[screen] md:mt-[17rem] 2xl:mt-[4.7rem] px-[1.2rem] py-[9.6rem] font-d2 text-text-primary"
    >
      <section className="max-w-[151.2rem] flex flex-col md:grid grid-cols-2 gap-[2.4rem]">
        <img
          src={project?.img}
          alt={project?.title}
          className="object-cover w-full"
        />
        <div className="flex flex-col text-[1.4rem] font-[400]">
          <div className="font-[900]">{project?.title}</div>
          <div
            id="project-detailBox"
            className="my-[1.6rem] border-t border-text-primary"
          >
            <div className="w-full grid grid-cols-2 py-[0.8rem] border-b">
              <span className="font-[900]">GENERATION</span>
              <span>{project?.tab}</span>
            </div>
            <div className="w-full grid grid-cols-2 py-[0.8rem] border-b">
              <span className="font-[900]">YEAR</span>
              <span>{project?.year}</span>
            </div>
            <div className="w-full grid grid-cols-2 py-[0.8rem] border-b">
              <span className="font-[900]">CATEGORY</span>
              <span>{project?.event}</span>
            </div>
            <div className="w-full grid grid-cols-2 py-[0.8rem] border-b">
              <span className="font-[900]">TEAM</span>
              <span>
                <h3>{project?.teamName}</h3>
                {project?.PM && <h4>PM: {project?.PM}</h4>}
                {project?.DE && <h4>DE: {project?.DE}</h4>}
                {project?.FE && <h4>FE: {project?.FE}</h4>}
                {project?.BE && <h4>BE: {project?.BE}</h4>}
              </span>
            </div>
            {project?.link && (
              <div className="w-full grid grid-cols-2 py-[0.8rem] border-b">
                <span className="font-[900]">LINK</span>
                <a className="underline" href={project.link} target="_blank">
                  {project?.link}
                </a>
              </div>
            )}
            {project?.stack && (
              <div className="w-full grid grid-cols-2 py-[0.8rem] border-b">
                <span className="font-[900]">STACKS</span>
                <span>{project?.stack}</span>
              </div>
            )}
          </div>
          <div>{project?.desc}</div>
        </div>
      </section>
    </main>
  );
}
