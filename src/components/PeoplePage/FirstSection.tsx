import React from 'react';

const cardinalList = Array.from({ length: 9 }, (_, i) => i + 5).reverse();
type Manager = {
  job: string;
  names: string[];
};

const ManagerList: { [key: number]: Manager[] } = {
  13: [
    { job: '대표', names: ['윤예은'] },
    { job: '부대표', names: ['김별', '나현진'] },
    { job: 'FE', names: ['김별', '김경우', '유민우'] },
    { job: 'BE', names: ['윤예은', '나현진', '김현승', '정파란', '박정주'] },
    { job: 'DE', names: ['이선명', '길민경', '김은홍'] }
  ],
  12: [],
  11: [],
  10: [],
  9: [],
  8: [],
  7: [],
  6: [],
  5: []
};

export default function FirstSection() {
  const [selectedCardinal, setSelectedCardinal] = React.useState(13);
  const onClickCardinal = (cardinal: number) => {
    setSelectedCardinal(cardinal);
  };
  return (
    <section className="max-w-[240rem]  bg-amber-500 mt-[4.7rem] py-[9.6rem] px-[1.2rem] gap-[2.4rem] flex justify-between max-md:flex-col">
      <div className="leftsection flex justify-between w-full max-md:flex-col">
        <div className="cardinal flex flex-col gap-[1.2rem] max-md:flex max-md:flex-row">
          {cardinalList.map((element, idx) => (
            <button
              key={idx}
              className={`${selectedCardinal !== element && 'opacity-30'} cursor-pointer font-d2 text-[1.4rem] font-[700] text-surface-primary  max-md:mb-[2.4rem]`}
              onClick={() => onClickCardinal(element)}
            >
              {element}th
            </button>
          ))}
        </div>
        <div className="Leader text-surface-primary font-d2 font-[700] line-height-[1.4] text-[1.4rem]">
          운영진
        </div>
      </div>
      <div className="rightSection w-full text-surface-primary font-d2  line-height-[1.4] text-[1.4rem] pl-[1.2rem] max-md:pl-0">
        <div>
          {ManagerList[selectedCardinal].map((part, idx1) => (
            <div
              key={idx1}
              className="w-[22.025rem] flex font-[700] gap-[2rem] border-b-[1px] border-surface-primary first:border-b-[0px] first:border-t-[1px]"
            >
              <div className="job w-[6rem]">{part.job}</div>
              <div className="names w-full">
                {part.names.map((name, idx2) => (
                  <div key={idx2} className="name w-full font-[400]">
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
