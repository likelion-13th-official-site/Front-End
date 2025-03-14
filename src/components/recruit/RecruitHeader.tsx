import { useNavigate } from 'react-router-dom';
import DdayCounter from './DDayCounter';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import ScrollDownLottie from '@/assets/lottie/scrolldown.json';
import { useState } from 'react';

export default function RecruitHeader() {
  const navigate = useNavigate();
  const [dayDiff, setDayDiff] = useState(0);
  const isDeadlineOver = dayDiff < 0;
  return (
    <motion.section
      initial={{
        background:
          'conic-gradient(from 0deg, var(--color-surface-tertiary) 8%, var(--color-text-primary, #0D54A5) 36%, var(--color-surface-secondary, #E4EDF7) 81%)'
      }}
      animate={{
        background:
          'conic-gradient(from 360deg, var(--color-surface-tertiary, #5C8CC2) 8%, var(--color-text-primary, #0D54A5) 36%, var(--color-surface-secondary, #E4EDF7) 81%)'
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'linear'
      }}
      id="recruit-header"
      className="max-2xl:sticky top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-conic from-surface-tertiary from-8% via-text-primary via-36% to-text-secondary to-81% text-text-invert font-d2"
    >
      {/* <h2 className="text-[1.4rem] font-[400] leading-[140%]">
        {isDeadlineOver
          ? '서류 지원 기간이 마감되었습니다'
          : '1차 서류 마감까지'}
      </h2> */}
      <DdayCounter dayDiff={dayDiff} setDayDiff={setDayDiff} />
      {isDeadlineOver ? null : (
        <button
          className="cursor-pointer hidden md:block font-d2 px-[2.4rem] py-[0.8rem] rounded-[2rem] text-[1.4rem] font-[400] leading-[140%] border-none bg-text-invert text-text-primary border hover:bg-text-primary hover:text-surface-primary"
          onClick={() => navigate('/apply')}
        >
          지원하기
        </button>
      )}
      <button className="block md:hidden font-d2 px-[2.4rem] py-[0.8rem] rounded-[2rem] text-[1.4rem] font-[400] leading-[140%] border-none bg-text-invert text-text-primary border">
        서류 결과 확인 기간이 아닙니다.
      </button>
      <div className="lottie-container [&_svg]:text-text-invert [&_svg]:fill-current [&_svg]:stroke-current">
        <Lottie
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid slice',
            progressiveLoad: true
          }}
          className="absolute bottom-0 left-[50vw] mx-auto transform -translate-x-1/2"
          loop={true}
          animationData={ScrollDownLottie}
        />
      </div>
    </motion.section>
  );
}
