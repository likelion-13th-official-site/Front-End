import { useState } from 'react';
import ThemeButton from './ThemeButton';
import MenuPortal from '@/components/portal/MenuPortal';
import MenuModal from './MenuModal';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import useDetectBlue from '@/hooks/header/useDetectBlue';

const navItems = [
  { name: 'About', link: '/' },
  { name: 'Track', link: 'track/front-end' },
  { name: 'People', link: 'people' },
  { name: 'Projects', link: 'projects' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  // const location = window.location.href;
  const isBlueBackground = useDetectBlue();
  // const [isBlueBackground, setIsBlueBackground] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setIsBlueBackground(
  //             entry.target.classList.contains('blueBackground')
  //           );
  //         } else {
  //           setIsBlueBackground(false);
  //         }
  //       });
  //     },
  //     { threshold: 0.5 } // 요소가 50% 이상 보일 때 감지
  //   );

  //   const sections = document.querySelectorAll('.blueBackground');
  //   sections.forEach((section) => observer.observe(section));

  //   return () => {
  //     sections.forEach((section) => observer.unobserve(section));
  //   };
  // }, [location]);

  return (
    <header
      id="header"
      className={clsx(
        'z-1001 absolute md:fixed w-full max-w-[151.2rem] font-pp px-[1.2rem] py-[1.2rem] flex gap-[2.4rem] justify-between text-text-primary',
        { fixed: isMenuOpen }
      )}
    >
      <div
        id="header-left"
        className={clsx('h-full flex flex-1 items-center', {
          'text-text-invert': isBlueBackground
        })}
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
        className={clsx(
          'flex flex-1 items-start justify-end md:justify-between',
          {
            'text-text-invert': isBlueBackground
          }
        )}
      >
        <nav id="header-right__nav" className="hidden md:block">
          <ul className="flex flex-row max-2xl:flex-col gap-[1.8rem] px-[1.2rem] py-[0] sm:py-[0.4rem] md:py-[0]">
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
            onClick={() => navigate('/recruit')}
            id="header-right__apply"
            className={clsx(
              'cursor-pointer hidden md:block flex-shrink-0 rounded-[3.2rem] px-[1.2rem] py-[0.4rem] border border-primary-normal text-[1.6rem] italic',
              isBlueBackground
                ? 'border-text-invert text-text-invert hover:border-text-invert hover:bg-text-invert hover:text-text-primary'
                : 'hover:border-text-primary hover:bg-text-primary hover:text-text-invert'
            )}
          >
            Apply Now →
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            id="header-right__apply"
            className={clsx(
              'cursor-pointer block md:hidden flex-shrink-0 rounded-[3.2rem] px-[1.2rem] py-[0.4rem] border border-primary-normal text-[1.6rem] italic',
              isBlueBackground
                ? 'border-text-invert text-text-invert hover:border-text-invert hover:bg-text-invert hover:text-text-primary'
                : 'hover:border-text-primary hover:bg-text-primary hover:text-text-invert'
            )}
          >
            Menu
          </button>
          <ThemeButton isBlueBackground={isBlueBackground} />
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
