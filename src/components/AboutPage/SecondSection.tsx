const achievementList = [
  { name: '운영 기간', value: '10' },
  { name: '프로젝트 수', value: '120+' },
  { name: '가입 회원 수', value: '140+' }
];

export default function SecondSection() {
  return (
    <section className="w-full max-w-[151.2rem] px-[1.2rem] py-[9.6rem] flex font-d2 text-[1.4rem] text-text-primary gap-[2.4rem] font-[400]">
      <div className="leftSection  w-full h-full flex max-md:hidden">
        <div className="w-full"></div>
        <div className="achievement w-full leading-[1.4] text-[1.4rem]">
          <div className="pb-[1.3rem] font-[700]">Achievement</div>
          <div className="">
            멋쟁이사자처럼 서강대는 2016년부터 10년째 끊임없이 달려왔습니다.
            해커톤, 아이디어톤, 신촌톤, 데모데이를 포함하여 120여개의 프로젝트를
            진행했습니다. 매년 새로운 아기사자들이 멋쟁이 사자처럼과 함께 하고
            있습니다.
          </div>
        </div>
      </div>

      <div className="rightSection w-full pl-[1.2rem]">
        <div>
          <div className="achievement  leading-[1.4] text-[1.4rem]">
            <div className="font-[700]">성과</div>
            <div className="flex gap-[6.4rem] flex-wrap max-[350px]:gap-[2.5rem] max-[535px]:gap-[2rem] ">
              {achievementList.map((item, idx) => (
                <div key={idx}>
                  <div className="text-text-primary font-pp text-[9.6rem] font-[500] leading-[1] max-md:text-[6.4rem] max-[450px]:text-[4.5rem] max-[350px]:text-[4rem] ">
                    {item.value}
                  </div>
                  <div>{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
