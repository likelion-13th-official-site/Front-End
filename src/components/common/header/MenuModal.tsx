import LogoSVG from '@/assets/svg/CircleLogo.svg?react';

interface MenuModalProps {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export default function MenuModal({ setIsMenuOpen }: MenuModalProps) {
  const navItems = [
    { name: 'About', link: '/' },
    { name: 'Track', link: 'track' },
    { name: 'People', link: 'people' },
    { name: 'Projects', link: 'projects' }
  ];

  return (
    <div className="block sm:hidden pl-[1.2rem] pr-[1.2rem] font-pp w-screen h-screen max-h-screen fixed top-0 left-0 bg-text-primary pt-[7.9rem]">
      <ul className="border-t border-surface-primary">
        {navItems.map((item) => (
          <li
            key={item.name}
            className="border-b border-surface-primary text-[3.6rem] italic text-text-invert py-[1.8rem]"
          >
            <a href={`${item.link}`} onClick={() => setIsMenuOpen(false)}>
              {item.name}
            </a>
          </li>
        ))}
        <LogoSVG className="absolute bottom-[1.2rem] left-[1.2rem] w-[8rem] h-[8rem] animate-spin-logo" />
      </ul>
    </div>
  );
}
