import { projectDetailData } from '@/components/projects/projectsData';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projectDetailData(Number(id));

  return (
    <main
      id="projects-detail -main"
      className="flex justify-center w-[screen] px-[1.2rem] py-[9.6rem] font-d2 text-text-primary"
    >
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="max-w-[151.2rem] flex flex-col md:grid grid-cols-2 gap-[2.4rem]"
      >
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
                {project?.year === 2023 && <h4>{project?.PM}</h4>}
                {project?.year !== 2023 && project?.PM && (
                  <h4>PM: {project?.PM}</h4>
                )}
                {project?.DE && <h4>DE: {project?.DE}</h4>}
                {project?.FE && <h4>FE: {project?.FE}</h4>}
                {project?.BE && <h4>BE: {project?.BE}</h4>}
              </span>
            </div>
            {project?.link && (
              <div className="w-full grid grid-cols-2 py-[0.8rem] border-b">
                <span className="font-[900]">LINK</span>
                <a
                  className="underline hover:text-text-secondary w-fit"
                  href={project.link}
                  target="_blank"
                >
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
      </motion.section>
    </main>
  );
}
