import ProjectsList from '@/components/projects/ProjectsList';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const tabList = ['ALL', '13th', '12th', '11th'];

export default function ProjectsPage() {
  const [searhParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('ALL');

  function handleTabClick(tab: string) {
    setActiveTab(tab);
    setSearchParams({ q: tab });
  }

  useEffect(() => {
    const tab = searhParams.get('q');
    if (tab && tabList.includes(tab)) {
      setActiveTab(tab);
    }
  }, []);

  return (
    <main
      id="projects-main"
      className="flex flex-col items-center w-[screen] px-[1.2rem] py-[9.6rem] font-d2 text-text-primary"
    >
      <div
        id="tab-wrapper"
        className="flex w-full md:grid grid-cols-2 gap-[2.4rem] max-w-[151.2rem]"
      >
        <ul
          id="tab-list"
          className="md:pl-[1.2rem] flex gap-[1.2rem] text-[1.4rem] font-normal col-start-2"
        >
          <span className="opacity-40">SHOW:</span>
          {tabList.map((tab, index) => (
            <li
              key={index}
              className={clsx('cursor-pointer opacity-40 hover:opacity-80', {
                'opacity-100 underline hover:opacity-100': activeTab === tab
              })}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
      <ProjectsList />
    </main>
  );
}
