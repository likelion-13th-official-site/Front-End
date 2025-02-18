const trackList = [
  {
    initial: 'F',
    name: 'Front-end',
    desc: '사용자와 상호작용하는 인터페이스를 시각화하여 구현합니다.',
    link: '/tracks?track=front-end'
  },
  {
    initial: 'B',
    name: 'Back-end',
    desc: '데이터 처리, 비즈니스 로직, 서버 관리 등을 담당합니다.',
    link: '/tracks?track=back-end'
  },
  {
    initial: 'D',
    name: 'Design',
    desc: '사용자의 관점에서 문제를 해결하는 서비스를 디자인합니다.',
    link: '/tracks?track=design'
  }
];

export default function RecruitTracks() {
  return (
    <div
      data-aos="fade-up"
      id="tracks-section"
      className="w-full flex flex-col gap-[1.6rem]"
    >
      <h1 className="text-[1.4rem] font-[900] leading-[140%]">모집 트랙</h1>
      <div
        id="tracks-list"
        className="w-full flex flex-col  border-t border-text-primary"
      >
        {trackList.map((track, idx) => (
          <div
            id="track-box"
            key={idx}
            className="w-full grid grid-cols-2 py-[0.8rem] border-b"
          >
            <div id="track-box__left" className="pr-[1.2rem] flex gap-[0.8rem]">
              <span
                id="track-initial"
                className="w-[9rem] font-pp italic font-[500] text-[9.6rem] flex items-center leading-[0.8]"
              >
                {track.initial}
              </span>
              <h2 id="track-name" className="flex-1 text-[1.4rem] font-[700]">
                {track.name}
              </h2>
            </div>
            <div id="track-box__right" className="flex gap-[1.2rem]">
              <span
                id="track-desc"
                className="flex-1 text-[1.4rem] font-[400] leading-[140%]"
              >
                {track.desc}
              </span>
              <a
                id="track-link"
                href={track.link}
                className="w-[5.6rem] h-fit font-pp text-[9.6rem] leading-[80%]"
              >
                ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
