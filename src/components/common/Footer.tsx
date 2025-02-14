import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

const linkList = [
  { title: 'About', link: '/' },
  { title: 'Tracks', link: '/tracks' },
  { title: 'People', link: '/people' },
  { title: 'Projects', link: '/projects' },
  { title: 'Recruit', link: '/recruit' },
  { title: 'Credits', link: '/credits' }
];

export default function Footer() {
  const path = useLocation().pathname.split('/')[1];

  return (
    <footer
      id="footer"
      className={clsx('font-d2 w-screen flex justify-center', {
        'text-text-invert border-text-invert': path === 'people',
        ' text-text-primary border-text-primary': path !== 'people'
      })}
    >
      <div
        id="footer-container"
        className="w-full max-w-[151.2rem] pt-[12.8rem] px-[1.2rem] pb-[0.8rem]"
      >
        <div className="w-full pt-[2.4rem] border-t  flex flex-col md:grid grid-cols-2 gap-[4.8rem] md:gap-[2.4rem]">
          <div
            id="footer-left"
            className="text-[1.4rem] font-[400] leading-[1.4] flex flex-col gap-[1.4rem]"
          >
            <div
              id="footer-instagram"
              className="grid grid-cols-2 gap-[1.2rem]"
            >
              <span>Instagram</span>
              <a
                href="https://www.instagram.com/likelion_sg/"
                className="underline hover:text-text-secondary"
                target="_blank"
              >
                @likelion_sg
              </a>
            </div>
            <div id="footer-email" className="grid grid-cols-2 gap-[1.2rem]">
              <span>Email</span>
              <a
                href="mailto:sogang@likelion.org"
                className="underline hover:text-text-secondary"
                target="_blank"
              >
                sogang@likelion.org
              </a>
            </div>
          </div>
          <div
            id="footer-right"
            className="grid grid-cols-2 gap-[1.2rem] text-[1.4rem] font-[400] leading-[1.4]"
          >
            <div className="col-start-2 flex flex-col gap-[1.4rem]">
              {linkList.map((link, index) => (
                <a key={index} href={link.link} className="hover:underline">
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
