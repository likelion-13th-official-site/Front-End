const trackList = [
  {
    trackName: 'Front-end',
    description: '사용자와 상호작용하는 인터페이스를 시각화하여 구현합니다.',
    link: ''
  },
  {
    trackName: 'Back-end',
    description: '데이터 처리, 비즈니스 로직, 서버 관리 등을 담당합니다.',
    link: ''
  },
  {
    trackName: 'Design',
    description: '사용자의 관점에서 문제를 해결하는 서비스를 디자인합니다.',
    link: ''
  }
];

export default function FifthSection() {
  return (
    <section className="w-full max-w-[151.2rem] px-[1.2rem] py-[9.6rem] bg-gray-300 flex font-d2 text-[1.4rem] text-text-primary gap-[2.4rem] font-[400]">
      <div className="leftSection w-full h-full flex max-md:hidden">
        <div className="w-full"></div>
        <div className="tracks w-full leading-[1.4] text-[1.4rem]">
          <div className="pb-[1.3rem] font-[700]">Tracks</div>
        </div>
      </div>

      <div className="rightSection w-full pl-[1.2rem]">
        <div>
          <div className="tracks leading-[1.4] text-[1.4rem]">
            <div className="font-[700] pb-[1.6rem]">트랙</div>
            <div className="">
              {trackList.map((track, idx) => {
                const representation = track.trackName[0];
                return (
                  <div
                    key={idx}
                    className=" flex font-d2 py-[0.4rem] text-text-primary font-[400] justify-between border-t-text-primary border-t-[1px] last:border-b-[1px] max-md:block "
                  >
                    <div className="flex gap-[2.4rem] w-full">
                      <div className="text-text-primary font-pp italic text-[9.6rem] font-[500] flex items-center leading-[0.8] max-md:text-[6.4rem]">
                        {representation}
                      </div>
                      <div className="font-[700] text-[1.4rem] max-[860px]:max-w-[4.725rem] max-md:max-w-[10rem]">
                        {track.trackName}
                      </div>
                    </div>

                    <div className="flex w-full gap-[1.2rem] max-[1200px]:max-w-[28.225rem] max-2xl:max-w-[23.225rem] max-[860px]:max-w-[16.725rem] max-md:max-w-full max-md:justify-between max-md:pt-[1.6rem]">
                      <div>{track.description}</div>
                      <a
                        className="text-[9.6rem] font-[500] font-pp leading-[0.8] cursor-pointer max-md:text-[4.8rem]"
                        target="_blank"
                        href={track.link}
                      >
                        ↗
                      </a>
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
