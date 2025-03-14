import { Link } from 'react-router-dom';

const trackList = [
  {
    trackName: 'Front-end',
    description: '사용자와 상호작용하는 인터페이스를 시각화하여 구현합니다.',
    link: '/tracks?track=front-end'
  },
  {
    trackName: 'Back-end',
    description: '데이터 처리, 비즈니스 로직, 서버 관리 등을 담당합니다.',
    link: '/tracks?track=back-end'
  },
  {
    trackName: 'Design',
    description: '사용자의 관점에서 문제를 해결하는 서비스를 디자인합니다.',
    link: '/tracks?track=design'
  }
];

export default function FifthSection() {
  return (
    <section
      data-aos="fade-up"
      className="w-full flex font-d2 text-[1.4rem] text-text-primary gap-[2.4rem] font-[400]"
    >
      {/* <div className="leftSection w-full h-full flex max-md:hidden">
        <div className="w-full"></div>
        <div className="tracks w-full leading-[1.4] text-[1.4rem]">
          <div className="pb-[1.3rem] font-[700]">Tracks</div>
        </div>
      </div> */}

      <div className="rightSection w-full ">
        <div>
          <div className="tracks leading-[1.4] text-[1.4rem]">
            <div className="font-[700] pb-[1.6rem]">트랙</div>
            <div className="">
              {trackList.map((track, idx) => {
                const representation = track.trackName[0];
                return (
                  <div
                    key={idx}
                    className=" flex font-d2 max-md:gap-[3.2rem] py-[0.4rem] text-text-primary font-[400] justify-between border-t-text-primary border-t-[1px] last:border-b-[1px] max-md:block "
                  >
                    <div className="flex gap-[2.4rem] w-full max-[472px]:mb-[1rem]">
                      <div className="text-text-primary font-pp italic text-[9.6rem] font-[500] flex items-center leading-[0.8] max-md:text-[6.4rem]">
                        {representation}
                      </div>
                      <div className="font-[700] text-[1.4rem] max-[860px]:max-w-[4.725rem] max-md:max-w-[10rem]">
                        {track.trackName}
                      </div>
                    </div>

                    <div className="flex justify-end w-full gap-[1.2rem] max-md:items-end max-md:justify-between leading-[1.4]">
                      <div>{track.description}</div>
                      <Link
                        to={track.link}
                        className="text-[9.6rem] font-[500] font-pp leading-[0.8] cursor-pointer max-md:text-[4.8rem] hover:animate-arrow-hover not-hover:animate-arrow-hover-done "
                      >
                        ↗
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
