import { activityList } from './activitiesDB';

export default function FourthSection() {
  return (
    <section className="w-full max-w-[151.2rem] px-[1.2rem] py-[9.6rem]  flex font-d2 text-[1.4rem] text-text-primary gap-[2.4rem] font-[400]">
      <div className="leftSection w-full h-full flex max-md:hidden ">
        <div className="w-full"></div>
        <div className="activities w-full leading-[1.4] text-[1.4rem]">
          <div className="pb-[1.3rem] font-[700] ">Activities</div>
        </div>
      </div>

      <div className="rightSection w-full pl-[1.2rem]  max-md:pl-0">
        <div>
          <div className="activities leading-[1.4] text-[1.4rem]">
            <div className="font-[700] pb-[1.6rem]">주요 활동</div>
            <div className="">
              {activityList.map((item, idx) => (
                <div
                  key={idx}
                  className="flex font-d2 py-[0.8rem] justify-between text-text-primary font-[400] leading-[1.4] border-t-text-primary border-t-[1px] last:border-b-[1px] max-md:block"
                >
                  <div className="flex min-w-[26rem] max-2xl:min-w-[15.6rem] max-md:mb-[1.6rem] relative">
                    <div className="absolute top-0 hover:bg-transparent bg-text-primary opacity-50 left-0 aspect-square h-[17.2rem] max-3xl:w-[10.8125rem] max-3xl:h-[10.8125rem] max-2xl:w-[7.0625rem] max-2xl:h-[7.0625rem] max-md:w-[33rem] max-md:h-[33rem] max-[550px]:w-[16.75rem] max-[550px]:h-[16.75rem]"></div>
                    <img
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      src={item.image}
                      srcSet={`${item.image}?w=400 400w,${item.image}?w=800 800w,${item.image}?w=1200 1200w`}
                      sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
                      alt={item.name}
                      className="object-cover aspect-square h-[17.2rem] max-3xl:w-[10.8125rem] max-3xl:h-[10.8125rem] max-2xl:w-[7.0625rem] max-2xl:h-[7.0625rem] max-md:w-[33rem] max-md:h-[33rem] max-[550px]:w-[16.75rem] max-[550px]:h-[16.75rem]"
                    />

                    <div className="font-[700] pl-[0.8rem] mr-[1rem] w-[15rem] flex-shrink-0  max-2xl:w-[8rem] max-md:w-[12em]">
                      {item.name}
                    </div>
                  </div>
                  <div>
                    <div className="max-w-[36rem] max-md:max-w-[67.6rem]">
                      {item.description}
                    </div>
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
