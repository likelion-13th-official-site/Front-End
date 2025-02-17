import StackItem from '../components/TrackPage/StackItem';
import { useNavigate, useParams } from 'react-router-dom';

interface StackItem {
  imageName: string;
  name: string;
  description: string;
}

const trackLetters = { 'front-end': 'F', 'back-end': 'B', design: 'D' };
const trackNames = {
  'front-end': 'Front-end',
  'back-end': 'Back-end',
  design: 'Design'
};

const stackItems = {
  'front-end': [
    {
      imageName: 'html.svg',
      name: 'HTML',
      description:
        'HTML은 웹사이트 콘텐츠를 설명하는데 사용되는 마크업 언어입니다.'
    },
    {
      imageName: 'css.svg',
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
  'back-end': [
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
  design: [
    {
      imageName: 'full.png',
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
};

const TrackPage = () => {
  // const [trackType, setTrackType] = useState<trackNum>(trackNum.FRONT_END);
  const trackType = useParams().type;
  const navigate = useNavigate();
  const handleArrowClick = (dir: string) => {
    if (trackType === 'front-end') {
      if (dir === 'left') {
        navigate('/track/design');
      } else {
        navigate('/track/back-end');
      }
    } else if (trackType === 'back-end') {
      if (dir === 'left') {
        navigate('/track/front-end');
      } else {
        navigate('/track/design');
      }
    } else if (trackType === 'design') {
      if (dir === 'left') {
        navigate('/track/back-end');
      } else {
        navigate('/track/front-end');
      }
    }
  };

  return (
    <>
      <div className="relative w-full h-screen px-[1.6rem] md:px-[3.2rem] flex 2xl:grid grid-cols-2 gap-[2.4rem] overflow-hidden bg-text-invert text-text-primary">
        <section className="absolute top-0 md:left-[3.2rem] w-screen 2xl:w-fit flex items-center justify-center leading-none">
          <span className=" text-[84.4rem] font-[900] font-pp-italic italic opacity-[0.1]">
            {trackLetters[trackType as keyof typeof trackLetters]}
          </span>
        </section>
        <section className="col-start-2 w-full flex  h-screen justify-center items-center font-[D2Coding] text-[1.4rem] font-bold leading-[1.96rem]">
          <div className=" flex justify-center w-full h-fit px-[6.4rem] md:px-[12.8rem] 2xl:pr-[13.2rem]">
            <div className=" w-full px-[1.2rem] flex flex-col gap-[1.6rem]">
              <p className="w-full">
                {trackNames[trackType as keyof typeof trackNames]}
              </p>
              <div className="flex flex-col items-start gap-[0.8rem]">
                {stackItems[trackType as keyof typeof stackItems].map(
                  (item) => (
                    <StackItem
                      key={item.name}
                      imageName={item.imageName}
                      name={item.name}
                      description={item.description}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        className="absolute top-[50%] left-[1.2rem] text-[9.6rem] leading-[13.4rem] translate-y-[-50%] text-text-primary cursor-pointer font-pp"
        onClick={() => handleArrowClick('left')}
      >
        ←
      </div>
      <div
        className="absolute top-[50%] right-[1.2rem] text-[9.6rem] leading-[13.4rem] translate-y-[-50%] text-text-primary cursor-pointer font-pp"
        onClick={() => handleArrowClick('right')}
      >
        →
      </div>
    </>
  );
};

export default TrackPage;
