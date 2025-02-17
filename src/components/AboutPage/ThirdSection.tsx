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
    <section
      data-aos="fade-up"
      className="w-full flex font-d2 text-[1.4rem] text-text-primary gap-[2.4rem] font-[400]"
    >
      {/* <div className="leftSection w-full h-full flex max-md:hidden">
        <div className="w-full"></div>
        <div className="awards w-full leading-[1.4] text-[1.4rem]">
          <div className="pb-[1.3rem] font-[700]">Awards</div>
        </div>
      </div> */}

      <div className="rightSection w-full ">
        <div>
          <div className="awards leading-[1.4] text-[1.4rem]">
            <div className="font-[700] pb-[1.6rem] ">수상</div>
            <div className="">
              {awardsList.map((item, idx) => (
                <div
                  key={idx}
                  className=" flex font-d2 py-[0.4rem] text-text-primary font-[400] leading-[1.4] justify-between border-t-text-primary border-t-[1px] last:border-b-[1px] "
                >
                  <div className="w-full flex gap-[2.4rem] justify-between max-md:hidden">
                    <div className="flex gap-[2.4rem]">
                      <div>{item.year}</div>
                      <div className="">{item.name}</div>
                    </div>
                    <div className="max-2xl:block">{item.team}</div>
                  </div>

                  <div className="flex flex-col w-full gap-[2.4rem] md:hidden">
                    <div className="flex justify-between w-full">
                      <div>{item.year}</div>
                      <div className="max-2xl:block">{item.team}</div>
                    </div>
                    <div className="">{item.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
