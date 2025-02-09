import React, { useState } from 'react';
import StackItem from '../components/TrackPage/StackItem';

interface StackItem {
  imageName: string;
  name: string;
  description: string;
}

enum trackNum {
  FRONT_END,
  BACK_END,
  DESIGN
}

const trackLetters: string[] = ['F', 'B', 'D'];
const trackNames: string[] = ['Front-end', 'Back-end', 'Design'];

const stackItems: StackItem[][] = [
  [
    {
      imageName: 'html.svg',
      name: 'HTML',
      description: '웹사이트 콘텐츠를 설명하는데 사용되는 마크업 언어'
    },
    {
      imageName: 'css.svg',
      name: 'CSS',
      description: '마크업 언어가 실제 표시되는 방법을 기술하는 스타일 언어'
    },
    {
      imageName: 'react.svg',
      name: 'React',
      description:
        '사용자 인터페이스를 만들기 위해 사용하는 자바스크립트 라이브러리'
    }
  ],
  [
    {
      imageName: 'html.svg',
      name: 'java',
      description:
        '자바는 객체지향 프로그래밍 언어로, 다양한 플랫폼에서 사용할 수 있습니다.'
    },
    {
      imageName: 'css.svg',
      name: 'spring',
      description:
        '스프링은 자바 플랫폼을 위한 오픈 소스 애플리케이션 프레임워크입니다.'
    }
  ],
  [
    {
      imageName: 'html.svg',
      name: 'Figma',
      description:
        '피그마는 인터페이스 디자인, 프로토타이핑, 협업 기능을 제공하는 디자인 툴입니다.'
    }
  ]
];

const TrackPage = () => {
  const [trackType, setTrackType] = useState<trackNum>(trackNum.FRONT_END);
  const handleArrowClick = (dir: string) => {
    if (dir === 'left') {
      if (trackType === trackNum.FRONT_END) {
        setTrackType(trackNum.DESIGN);
      } else {
        setTrackType(trackType - 1);
      }
    } else {
      if (trackType === trackNum.DESIGN) {
        setTrackType(trackNum.FRONT_END);
      } else {
        setTrackType(trackType + 1);
      }
    }
  };
  document.documentElement.classList.add('dark');
  return (
    <>
      <div className="w-full h-screen py-[9.6rem] px-[1.2rem] justify-center items-center flex gap-[2.4rem] overflow-hidden bg-primary text-primary">
        <section className="grow-1 shrink-1 basis-0">
          <span className="text-[102.4rem] font-[D2Coding]  italic opacity-[0.1] leading-[143rem] text-center">
            {trackLetters[trackType]}
          </span>
        </section>
        <section className="grow-1 shrink-1 basis-0 w-full flex items-center font-[D2Coding] text-[1.4rem] font-bold leading-[1.96rem]">
          <div className="w-full pr-[13.2rem]">
            <div className="w-full px-[1.2rem] flex flex-col gap-[1.6rem]">
              <p className="w-full ">{trackNames[trackType]}</p>
              <div className="flex flex-col items-start gap-[0.8rem]">
                {stackItems[trackType].map((item) => (
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
      <div
        className="absolute top-[50%] left-[1.2rem] text-[9.6rem] leading-[13.4rem] translate-y-[-50%] text-primary italic cursor-pointer"
        onClick={() => handleArrowClick('left')}
      >
        ←
      </div>
      <div
        className="absolute top-[50%] right-[1.2rem] text-[9.6rem] leading-[13.4rem] translate-y-[-50%] text-primary italic cursor-pointer"
        onClick={() => handleArrowClick('right')}
      >
        →
      </div>
    </>
  );
};

export default TrackPage;
