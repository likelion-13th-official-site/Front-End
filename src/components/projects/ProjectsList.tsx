import { useNavigate, useSearchParams } from 'react-router-dom';
import { projectsData } from './projectsData';
import { useEffect, useState } from 'react';

export interface ProjectListType {
  id: number;
  title: string;
  year: number;
  tab: string;
  teamName: string | null;
  PM: string | null;
  DE: string | null;
  FE: string | null;
  BE: string | null;
  stack: string | null;
  desc: string;
  event: string;
  img: string;
  link: string | null;
}

export default function ProjectsList() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('q');
  const navigate = useNavigate();
  const [filterdData, setFilterdData] = useState<ProjectListType[]>([]);

  useEffect(() => {
    if (tab === 'ALL' || !tab) {
      setFilterdData(projectsData);
    } else {
      const filtered = projectsData.filter((proj) => proj.tab === tab);
      setFilterdData(filtered);
    }
  }, [tab, searchParams]);

  return (
    <section className="w-full max-w-[151.2rem]s">
      {filterdData?.map((proj: ProjectListType, idx: number) => (
        <div
          id="proj-box"
          key={idx}
          onClick={() => navigate(`/projects/${proj.id}`)}
          className="group mt-[3.6rem] border-t border-text-primary pt-[0.8rem] flex flex-col md:flex-row justify-between gap-[2.4rem] cursor-pointer"
        >
          <div
            id="proj-left"
            className="flex-1 flex flex-col md:flex-row gap-[1.2rem]"
          >
            <div id="title-year" className="flex-1 flex flex-col gap-[2rem]">
              <h1 className="group-hover:text-text-secondary ease-out duration-[3000ms] text-[1.4rem] font-[700] leading-[140%]">
                {proj.title}
              </h1>
              <p className="text-[1.4rem] opacity-40 leading-[140%]">
                {proj.year}
              </p>
            </div>
            <h3 className="flex-1 text-[1.4rem] leading-[140%]">{proj.desc}</h3>
          </div>
          <div
            id="proj-right"
            className="flex-1 md:pl-[1.2rem] flex flex-col md:grid grid-cols-2 gap-[1.2rem]"
          >
            <h4 className="text-[1.4rem] font-[400] leading-[140%]">
              {proj.event}
            </h4>
            <img
              loading="lazy"
              src={proj.img}
              alt={proj.title}
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
