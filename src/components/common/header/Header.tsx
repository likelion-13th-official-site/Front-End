import { useState } from 'react';
import ThemeButton from './ThemeButton';
import MenuPortal from '@/components/portal/MenuPortal';
import MenuModal from './MenuModal';
import clsx from 'clsx';

const navItems = [
  { name: 'About', link: '/' },
  { name: 'Track', link: 'track' },
  { name: 'People', link: 'people' },
  { name: 'Projects', link: 'projects' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      id="header"
      className={clsx(
        'z-1000 absolute sm:fixed top-0 left-0 font-pp w-screen h-[4.7rem] sm:h-[17rem] md:h-[4.7rem] pl-[1.2rem] pr-[2.2rem] py-[1.2rem] flex gap-[2.4rem] justify-between items-center',
        {
          fixed: isMenuOpen
        }
      )}
    >
      <div
        id="header-left"
        className="h-full flex flex-1 items-center sm:items-start md:items-center"
      >
        <div
          id="header-left __logo"
          className="text-[1.6rem] w-fit flex items-center"
        >
          <span>Likelion</span>
          <i className="italic">Sogang</i>
          <sup className="">13</sup>
        </div>
      </div>
      <div
        id="header-right"
        className="flex flex-1 items-center sm:items-start md:items-center justify-end sm:justify-between"
      >
        <nav id="header-right__nav" className="hidden sm:block">
          <ul className="flex flex-row sm:flex-col md:flex-row gap-[1.8rem] px-[1.2rem] py-[0] sm:py-[0.4rem] md:py-[0]">
            {navItems.map((item) => (
              <li key={item.name} className="text-[1.6rem] italic">
                <a href={`${item.link}`}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          id="header-right__buttons"
          className="flex gap-[0.8rem] align-center"
        >
          <button
            id="header-right__apply"
            className="cursor-pointer hidden sm:block flex-shrink-0 rounded-[3.2rem] px-[1.2rem] py-[0.4rem] border border-primary-normal text-[1.6rem] italic"
          >
            Apply Now →
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            id="header-right__apply"
            className="cursor-pointer block sm:hidden flex-shrink-0 rounded-[3.2rem] px-[1.2rem] py-[0.4rem] border border-primary-normal text-[1.6rem] italic"
          >
            Menu
          </button>
          <ThemeButton />
        </div>
      </div>
      {isMenuOpen && (
        <MenuPortal>
          <MenuModal setIsMenuOpen={setIsMenuOpen} />
        </MenuPortal>
      )}
    </header>
  );
}
