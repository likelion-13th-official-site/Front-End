import React from 'react';
import useResponsiveMonths from '@/hooks/AboutPage/useResponsiveMonths';

const TOGGLE_PX = 1000;

export default function SixthSection() {
  const displayMonths = useResponsiveMonths(TOGGLE_PX);
  return (
    <section className="w-full max-w-[151.2rem] px-[1.2rem] py-[9.6rem] bg-gray-300 flex font-d2 text-[1.4rem] text-text-primary gap-[2.4rem] font-[400]">
      <div className="leftSection w-full h-full flex max-md:hidden gap-[1.2rem]">
        <div className="w-full"></div>
        <div className="timeline w-full leading-[1.4] text-[1.4rem]">
          <div className="pb-[1.3rem] font-[700]">Timeline</div>
        </div>
      </div>

      <div className="rightSection w-full pl-[1.2rem]">
        <div>
          <div className="timeline leading-[1.4] text-[1.4rem]">
            <div className="font-[700] pb-[1.6rem]">일정</div>
            <div className="">
              <div className=" flex font-d2 py-[0.4rem] text-text-primary font-[400] leading-[1.4] justify-between border-t-text-primary border-t-[1px]">
                {displayMonths.map((month, idx) => {
                  return (
                    <div key={idx} className="font-[700]">
                      {month}
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-[0.8rem]">
                {annualActivityList.map((activity, idx) => {
                  const color = activity.isOneTime ? 'white' : 'text-primary';
                  const isLastTwo = idx >= annualActivityList.length - 2;

                  if (isLastTwo)
                    return (
                      <div key={idx} className="flex gap-[0.6rem] justify-end">
                        <div className="flex flex-shrink-0">
                          {activity.name}
                        </div>
                        <div
                          key={idx}
                          style={{
                            width: `${activity.width}%`
                          }}
                          className={`bg-${color} bg-text h-[2rem] border-text-primary border-[1px]`}
                        />
                      </div>
                    );
                  else
                    return (
                      <div
                        key={idx}
                        className="flex gap-[0.6rem] justify-start"
                      >
                        <div
                          key={idx}
                          style={{
                            width: `${activity.width}%`,
                            marginLeft: `${activity.margin}%`
                          }}
                          className={`bg-${color} bg-text h-[2rem] border-text-primary border-[1px]`}
                        />
                        <div>{activity.name}</div>
                      </div>
                    );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const annualActivityList = [
  {
    name: 'Recruiting',
    isOneTime: false,
    width: 14.88,
    margin: 0
  },
  {
    name: 'OT',
    isOneTime: true,
    width: 2.77,
    margin: 15.58
  },
  {
    name: 'Lion Sprint',
    isOneTime: false,
    width: 34.72,
    margin: 17.8
  },
  {
    name: 'MT',
    isOneTime: true,
    width: 2.77,
    margin: 19.8
  },
  {
    name: 'POV & 아이디어톤',
    isOneTime: false,
    width: 5,
    margin: 26.69
  },
  {
    name: '복커톤',
    isOneTime: true,
    width: 2.77,
    margin: 42
  },
  {
    name: '여름방학 스터디',
    isOneTime: false,
    width: 17.64,
    margin: 45
  },
  {
    name: '전국 연합 해커톤',
    isOneTime: true,
    width: 2.77,
    margin: 57
  },
  {
    name: '신촌톤',
    isOneTime: true,
    width: 2.77,
    margin: 60.3
  },
  {
    name: '팀 프로젝트 진행',
    isOneTime: false,
    width: 34.17,
    margin: 50
  },
  {
    name: '신촌 연합 데모데이',
    isOneTime: true,
    width: 2.77,
    margin: 76
  }
];
