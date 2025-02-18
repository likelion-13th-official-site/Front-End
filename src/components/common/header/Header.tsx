import { useState } from 'react';
import ThemeButton from './ThemeButton';
import MenuPortal from '@/components/portal/MenuPortal';
import MenuModal from './MenuModal';
import clsx from 'clsx';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useDetectBlue from '@/hooks/header/useDetectBlue';

const navItems = [
  { name: 'About', link: '/' },
  { name: 'Tracks', link: '/tracks' },
  { name: 'People', link: '/people' },
  { name: 'Projects', link: '/projects' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname.split('/')[1];
  const isBlueBackground = useDetectBlue();

  return (
    <header
      id="header"
      className={clsx(
        'text-text-primary z-1001 absolute 2xl:fixed w-full font-pp px-[1.6rem] md:px-[3.2rem] flex gap-[6.4rem] justify-between transition-background duration-0',
        { fixed: isMenuOpen },
        {
          '2xl:bg-text-invert':
            (path === 'tracks' || path === 'projects') && !isMenuOpen
        }
      )}
    >
      {/* 2xl 이상 */}
      <div
        id="header-left"
        className={clsx(
          'h-full flex-1 items-center hidden 2xl:flex py-[1.2rem] ',
          {
            'text-text-primary bg-text-invert': path === 'people',
            'text-text-invert':
              path === '' || path === 'recruit' || path === 'credits'
          }
        )}
      >
        <Link
          to="/"
          id="header-left__logo"
          className={clsx(
            'text-[1.6rem] w-fit flex items-center cursor-pointer',
            { 'text-text-invert': isMenuOpen }
          )}
        >
          <span>Likelion</span>
          <i className="italic">Sogang</i>
          <sup>13</sup>
        </Link>
      </div>
      {/* 2xl 이하 */}
      <div
        id="header-left"
        className={clsx(
          'h-full flex-1 items-center flex 2xl:hidden py-[1.2rem] ',
          {
            'text-text-invert':
              path === '' ||
              path === 'recruit' ||
              path === 'people' ||
              path === 'credits'
          }
        )}
      >
        <Link
          to="/"
          id="header-left__logo"
          className={clsx(
            'text-[1.6rem] w-fit flex items-center cursor-pointer',
            { 'text-text-invert': isMenuOpen }
          )}
        >
          <span>Likelion</span>
          <i className="italic">Sogang</i>
          <sup>13</sup>
        </Link>
      </div>
      {/* 2xl 이상 */}
      <div
        id="header-right"
        className={clsx(
          'flex-1 items-start justify-end md:justify-between hidden 2xl:flex py-[1.2rem] ',
          {
            'text-text-primary bg-text-invert h-full':
              path === '' || path === 'recruit',
            'text-text-invert': path === 'people' || path === 'credits'
          }
        )}
      >
        <nav id="header-right__nav" className="hidden md:block">
          <ul className="flex flex-row max-2xl:flex-col gap-[1.8rem] py-[0] sm:py-[0.4rem] md:py-[0]">
            {navItems.map((item) => (
              <li key={item.name} className="text-[1.6rem] italic">
                <Link to={`${item.link}`}>{item.name}</Link>
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
              'cursor-pointer flex-shrink-0 rounded-[3.2rem] px-[1.2rem] py-[0.4rem] border border-primary-normal text-[1.6rem] italic leading-1',
              {
                'hidden md:hidden': path === 'recruit',
                'hidden md:block': path !== 'recruit'
              },
              {
                'hover:text-text-invert hover:bg-text-primary':
                  path === '' ||
                  path === 'recruit' ||
                  path === 'projects' ||
                  path === 'tracks',
                'hover:text-text-primary hover:bg-text-invert hover:border-text-invert':
                  path === 'people' || path === 'credits'
              }
            )}
          >
            Apply Now →
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            id="header-right__apply"
            className={clsx(
              'cursor-pointer block md:hidden flex-shrink-0 rounded-[3.2rem] px-[1.2rem] py-[0.4rem] border border-primary-normal text-[1.6rem] italic leading-1',
              {
                'hover:text-text-primary hover:bg-text-invert':
                  path === 'credits' || path === '' || path === 'recruit',
                'hover:text-text-invert hover:bg-text-primary':
                  path === 'people' || path === 'tracks' || path === 'projects'
              },
              {
                'text-text-invert hover:border-text-invert': isMenuOpen
              }
            )}
          >
            Menu
          </button>
          <ThemeButton
            isBlueBackground={isBlueBackground}
            isMenuOpen={isMenuOpen}
          />
        </div>
      </div>
      {/* 2xl 이하 */}
      <div
        id="header-right"
        className={clsx(
          'flex-1 items-start justify-end md:justify-between flex 2xl:hidden py-[1.2rem] ',
          {
            'text-text-invert':
              path === 'recruit' ||
              path === '' ||
              path === 'people' ||
              path === 'credits'
          }
        )}
      >
        <nav id="header-right__nav" className="hidden md:block">
          <ul className="flex flex-row max-2xl:flex-col gap-[1.8rem]  py-[0] sm:py-[0.4rem] md:py-[0]">
            {navItems.map((item) => (
              <li key={item.name} className="text-[1.6rem] italic">
                <Link to={`${item.link}`}>{item.name}</Link>
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
              'cursor-pointer flex-shrink-0 rounded-[3.2rem] px-[1.2rem] py-[0.4rem] border border-primary-normal text-[1.6rem] italic leading-1',
              {
                'hidden md:hidden': path === 'recruit',
                'hidden md:block': path !== 'recruit'
              },
              {
                'hover:text-text-primary hover:bg-text-invert hover:border-text-invert':
                  path === 'people' ||
                  path === 'credits' ||
                  path === '' ||
                  path === 'recruit',
                'hover:text-text-invert hover:bg-text-primary':
                  path === 'tracks' || path === 'projects'
              }
            )}
          >
            Apply Now →
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            id="header-right__apply"
            className={clsx(
              'cursor-pointer block md:hidden flex-shrink-0 rounded-[3.2rem] px-[1.2rem] py-[0.4rem] border border-primary-normal text-[1.6rem] italic leading-1',
              {
                'hover:text-text-primary hover:bg-text-invert hover:border-text-invert':
                  path === 'people' ||
                  path === 'credits' ||
                  path === '' ||
                  path === 'recruit',
                'hover:text-text-invert hover:bg-text-primary':
                  path === 'tracks' || path === 'projects'
              },
              {
                'text-text-invert hover:border-text-invert': isMenuOpen
              }
            )}
          >
            Menu
          </button>
          <ThemeButton
            isBlueBackground={isBlueBackground}
            isMenuOpen={isMenuOpen}
          />
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
