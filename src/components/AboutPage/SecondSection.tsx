import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const achievementList = [
  { name: '운영 기간', value: 10 },
  { name: '프로젝트 수', value: 120 },
  { name: '가입 회원 수', value: 140 }
];

export default function SecondSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const maxValue = Math.max(...achievementList.map((item) => item.value)); // 최대값 찾기
  const commonDuration = 5; // 전체 애니메이션 시간
  const speed = maxValue / commonDuration; // 동일한 증가 속도 (숫자/초)
  const minDuration = 4; // 최소 지속 시간 (작은 숫자가 너무 빨리 끝나는 걸 방지)

  return (
    <section
      ref={ref}
      data-aos="fade-up"
      className="w-full flex font-d2 text-[1.4rem] text-text-primary gap-[2.4rem] font-[400]"
    >
      <div className="w-full">
        <div className="achievement leading-[1.4] text-[1.4rem]">
          <div className="font-[700]">성과</div>
          <div className="flex gap-[6.4rem] flex-wrap max-3xl:gap-[5.6rem] max-2xl:gap-[6.4rem] max-[445px]:gap-[3rem]">
            {achievementList.map((item, idx) => (
              <div key={idx}>
                <div className="text-text-primary font-pp text-[9.6rem] font-[500] leading-[1] max-3xl:text-[6.4rem] max-2xl:text-[12.8rem] max-[960px]:text-[8rem] max-md:text-[6.4rem] max-[580px]:text-[4rem] ">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={Math.max(minDuration, item.value / speed)}
                      delay={0.2}
                    />
                  ) : (
                    0
                  )}
                  {item.value >= 100 && '+'}
                </div>
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
