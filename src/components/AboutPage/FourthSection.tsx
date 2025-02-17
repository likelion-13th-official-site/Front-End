import { activityList } from './activitiesDB';

export default function FourthSection() {
  return (
    <section
      data-aos="fade-up"
      className="w-full   flex font-d2 text-[1.4rem] text-text-primary gap-[2.4rem] font-[400]"
    >
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
                  className="flex  font-d2 py-[0.8rem] max-md:flex-col max-md:gap-[1.6rem] justify-between  text-text-primary font-[400] leading-[1.4] border-t-text-primary border-t-[1px] last:border-b-[1px]"
                >
                  {/* 왼쪽 영역 (이미지 + name) */}

                  <div className="flex relative min-w-[26rem] font-[1.4rem] flex-shrink-0">
                    <div className="absolute transition-all opacity-40 top-0 bg-text-primary hover:bg-transparent h-[22.6rem] max-4xl:h-[16.5rem] max-3xl:h-[11.3625rem] max-2xl:h-[25.1rem] max-md:h-[32.6rem] max-[37.5rem]:h-[16.35rem] w-[22.6rem] max-4xl:w-[16.5rem] max-3xl:w-[11.3625rem] max-2xl:w-[25.1rem] max-md:w-[32.6rem] max-[37.5rem]:w-[16.35rem]"></div>
                    <img
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      src={item.image}
                      srcSet={`${item.image}?w=400 400w,${item.image}?w=800 800w,${item.image}?w=1200 1200w`}
                      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
                      alt={item.name}
                      className="object-cover aspect-square h-[22.6rem] max-4xl:h-[16.5rem] max-3xl:h-[11.3625rem] max-2xl:h-[25.1rem] max-md:h-[32.6rem] max-[37.5rem]:h-[16.35rem]"
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
