import { useNavigate } from 'react-router-dom';
import DdayCounter from './DDayCounter';
import { motion } from 'framer-motion';

export default function RecruitHeader() {
  const navigate = useNavigate();

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
      className="w-full h-full flex flex-col justify-center items-center bg-conic from-surface-tertiary from-8% via-text-primary via-36% to-text-secondary to-81% text-text-invert font-d2"
    >
      <h2 className="text-[1.4rem] font-[400] leading-[140%]">
        1차 서류 마감까지
      </h2>
      <DdayCounter />
      <button
        className="cursor-pointer hidden md:block font-d2 px-[2.4rem] py-[0.8rem] rounded-[2rem] text-[1.4rem] font-[400] leading-[140%] border-none bg-text-invert text-text-primary border hover:bg-text-primary hover:text-surface-primary"
        onClick={() => navigate('/apply')}
      >
        지원하기
      </button>
      <button className="block md:hidden font-d2 px-[2.4rem] py-[0.8rem] rounded-[2rem] text-[1.4rem] font-[400] leading-[140%] border-none bg-text-invert text-text-primary border hover:bg-text-primary hover:text-surface-primary">
        PC에서만 지원 가능합니다.
      </button>
    </motion.section>
  );
}
