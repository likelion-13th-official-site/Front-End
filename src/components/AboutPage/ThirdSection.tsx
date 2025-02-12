import React from 'react';

const awardsList = [
  {
    year: 2024,
    name: '서강융합기술 경진대회 인문, 예체능 부문 대상',
    team: '야미원정대'
  },
  {
    year: 2023,
    name: '멋쟁이사자처럼 전국 연합 해커톤 3위',
    team: '효자동개발자'
  },
  { year: 2021, name: '멋쟁이사자처럼 전국 연합 해커톤 1위', team: 'URL repo' },
  {
    year: 2021,
    name: '멋쟁이사자처럼 전국 연합 아이디어톤 1위',
    team: 'URL repo'
  }
];

export default function ThirdSection() {
  return (
    <section className="w-full max-w-[151.2rem] px-[1.2rem] py-[9.6rem] bg-gray-300 flex font-d2 text-[1.4rem] text-text-primary gap-[2.4rem] font-[400]">
      <div className="leftSection w-full h-full flex max-md:hidden">
        <div className="w-full"></div>
        <div className="awards w-full leading-[1.4] text-[1.4rem]">
          <div className="pb-[1.3rem] font-[700]">Awards</div>
        </div>
      </div>

      <div className="rightSection w-full pl-[1.2rem]">
        <div>
          <div className="awards leading-[1.4] text-[1.4rem]">
            <div className="font-[700] pb-[1.6rem]">수상</div>
            <div className="">
              {awardsList.map((item, idx) => (
                <div
                  key={idx}
                  className=" flex font-d2 py-[0.4rem] text-text-primary font-[400] leading-[1.4] justify-between border-t-text-primary border-t-[1px] last:border-b-[1px] max-2xl:flex-col max-2xl:gap-[2.4rem]"
                >
                  <div className="flex gap-[2.4rem] max-2xl:justify-between max-2xl:">
                    <div>{item.year}</div>
                    <div className="max-2xl:hidden">{item.name}</div>
                    <div className="hidden max-2xl:block">{item.team}</div>
                  </div>

                  <div className="max-2xl:hidden">{item.team}</div>
                  <div className="hidden max-2xl:block">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
