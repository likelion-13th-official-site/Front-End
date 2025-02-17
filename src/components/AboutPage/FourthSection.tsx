import { activityList } from './activitiesDB';

export default function FourthSection() {
  return (
    <section className="w-full   flex font-d2 text-[1.4rem] text-text-primary gap-[2.4rem] font-[400]">
      {/* <div className="leftSection w-full h-full flex max-md:hidden ">
        <div className="w-full"></div>
        <div className="activities w-full leading-[1.4] text-[1.4rem]">
          <div className="pb-[1.3rem] font-[700] ">Activities</div>
        </div>
      </div> */}

      <div className="rightSection w-full ">
        <div>
          <div className="activities leading-[1.4] text-[1.4rem]">
            <div className="font-[700] pb-[1.6rem]">주요 활동</div>
            <div className="">
              {activityList.map((item, idx) => (
                <div
                  key={idx}
                  className="flex font-d2 py-[0.8rem] justify-between text-text-primary font-[400] leading-[1.4] border-t-text-primary border-t-[1px] last:border-b-[1px]"
                >
                  {/* 왼쪽 영역 (이미지 + name) */}
                  <div className="flex min-w-[26rem] font-[1.4rem] flex-shrink-0">
                    <img
                      src={`${item.image}`}
                      alt={item.name}
                      className="object-cover aspect-square h-[22.6rem] max-4xl:h-[16.5rem] max-3xl:h-[11.3625rem]"
                    />
                    <div className="font-[700] pl-[0.8rem] w-[15rem] flex-shrink-0">
                      {item.name}
                    </div>
                  </div>

                  {/* 오른쪽 영역 (description) */}
                  <div className="flex-1">
                    <div className="">{item.description}</div>
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
