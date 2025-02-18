import StackItem from '../components/TrackPage/StackItem';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const trackLetters = ['F', 'B', 'D'];
const trackNames = ['Front-end', 'Back-end', 'Design'];

const stackItems = [
  [
    {
      imageName: 'HTML5.svg',
      name: 'HTML',
      description:
        'HTML은 웹사이트 콘텐츠를 설명하는데 사용되는 마크업 언어입니다.'
    },
    {
      imageName: 'CSS3.svg',
      name: 'CSS',
      description:
        '마크업 언어가 실제 표시되는 방법을 기술하는 스타일 언어인 CSS를 학습합니다.'
    },
    {
      imageName: 'react.svg',
      name: 'React',
      description:
        '프론트엔드 개발에서 가장 널리 사용되는 React 라이브러리를 활용하여 효율적인 UI를 구축합니다.'
    }
  ],
  [
    {
      imageName: 'Java.svg',
      name: 'JAVA',
      description: '백엔드 프로그래밍을 위한 기초로써 JAVA 언어를 공부합니다.'
    },
    {
      imageName: 'Spring.svg',
      name: 'Spring',
      description: '백엔드 프레임워크인 Spring을 배우고 REST API를 개발합니다.'
    },
    {
      imageName: 'AWS.svg',
      name: 'AWS',
      description: '클라우드 컴퓨팅 서비스 AWS를 이용해 서버를 배포합니다. '
    }
  ],
  [
    {
      imageName: 'UX.svg',
      name: 'UX',
      description:
        'Design Thinking과 Agile 방법론에 따라 사용자 관점에서 문제를 정의하고, 정보구조(IA)와 와이어프레임을 활용해 논리적인 서비스 설계를 배웁니다.'
    },
    {
      imageName: 'Figma.svg',
      name: 'UI',
      description:
        '피그마 실습을 통해 실무에서 활용 가능한 UI 디자인 스킬을 익히고, 디자인 시스템을 구축하는 방법을 배웁니다.'
    }
  ]
];

const tracks = ['front-end', 'back-end', 'design'];
const translateList = ['100vw', '0', '-100vw'];

const TrackPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTrack = searchParams.get('track') || 'front-end';
  const [trackType, setTrackType] = useState(currentTrack);
  const [translateX, setTranslateX] = useState('');

  useEffect(() => {
    if (searchParams.get('track') === null) {
      setSearchParams({ track: 'front-end' });
    }
    if (!tracks.includes(currentTrack)) {
      setSearchParams({ track: 'front-end' });
      setTranslateX('100vw');
    } else {
      setTrackType(currentTrack);
      setTranslateX(translateList[tracks.indexOf(currentTrack)]);
    }
  }, [currentTrack, setSearchParams]);

  const handleArrowClick = (dir: string) => {
    const currentIndex = tracks.indexOf(trackType);
    const newIndex = dir === 'left' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex === 0) {
      setTranslateX('100vw');
    } else if (newIndex === 1) {
      setTranslateX('0');
    } else if (newIndex === 2) {
      setTranslateX('-100vw');
    }

    setSearchParams({ track: tracks[newIndex] });
  };

  return (
    <main className="h-screen">
      <div
        style={{
          transform: `translateX(${translateX})`,
          transition: 'transform ease-out 1s'
        }}
        className={`h-[110vh] flex overflow-x-hidden overflow-y-hidden gap-2`}
      >
        {stackItems.map((stackItem, index) => (
          <div
            key={index}
            className="relative w-screen h-screen  flex 2xl:grid grid-cols-2 gap-[2.4rem] text-text-primary"
          >
            <section className="absolute top-[5rem] md:left-[3.2rem] h-full w-full 2xl:w-screen flex items-center justify-center leading-none">
              <span
                style={{
                  opacity: tracks.indexOf(currentTrack) === index ? 0.1 : 0,
                  transition: 'opacity 1s'
                }}
                className={`translate-x-[-8rem] md:translate-x-0 w-full text-[84.4rem] font-[300] font-pp-italic italic md:opacity-[0.1]`}
              >
                {trackLetters[index]}
              </span>
            </section>
            <section className="col-start-2 w-full flex  h-screen justify-center items-center font-[D2Coding] text-[1.4rem] font-bold leading-[1.96rem]">
              <div className=" flex justify-center w-full h-fit 2xl:pr-[12.8rem]">
                <div className=" w-full px-[6.4rem] md:px-[12.8rem] 2xl:px-[0rem] flex flex-col gap-[1.6rem]">
                  <p className="w-full">{trackNames[index]}</p>
                  <div className="flex flex-col items-start gap-[0.8rem]">
                    {stackItem.map((item) => (
                      <StackItem
                        key={item.name}
                        imageName={item.imageName}
                        name={item.name}
                        description={item.description}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
      {currentTrack !== 'front-end' && (
        <div
          className="absolute top-[50%] left-[1.2rem] text-[4.8rem] md:text-[9.6rem] leading-[13.4rem] translate-y-[-50%] text-text-primary cursor-pointer font-pp"
          onClick={() => handleArrowClick('left')}
        >
          ←
        </div>
      )}
      {currentTrack !== 'design' && (
        <div
          className="absolute top-[50%] right-[1.2rem] text-[4.8rem] md:text-[9.6rem] leading-[13.4rem] translate-y-[-50%] text-text-primary cursor-pointer font-pp"
          onClick={() => handleArrowClick('right')}
        >
          →
        </div>
      )}
    </main>
  );
};

export default TrackPage;
