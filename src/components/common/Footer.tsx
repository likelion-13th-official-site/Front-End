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
      className={clsx(
        'font-d2 w-screen justify-center pb-[12.8rem]',
        {
          'text-text-invert border-text-invert': path === 'credits',
          ' text-text-primary border-text-primary': path !== 'credits'
        },
        {
          'bg-text-primary': path === 'credits'
        },
        {
          'flex 2xl:grid grid-cols-2':
            path === '' || path === 'recruit' || path === 'people',
          flex: path === 'credits' || path === 'projects' || path === 'track'
        }
      )}
    >
      <div
        id="footer-container"
        className={clsx(
          'w-full max-w-[151.2rem] pt-[12.8rem] px-[3.2rem] max-md:px-[1.6rem] pb-[0.8rem]',
          {
            'col-start-1': path === 'people',
            'col-start-2': path === 'recruit' || path === ''
          }
        )}
      >
        <div className="w-full py-[2.4rem] border-t  flex flex-col gap-[4.8rem]">
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
                href="mailto:likelionSG@gmail.com"
                className="underline hover:text-text-secondary"
                target="_blank"
              >
                likelionSG@gmail.com
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
