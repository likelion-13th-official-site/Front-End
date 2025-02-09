import ApplyFirst from '@/components/ApplyPage/ApplyFirst';
import ApplySecond from '@/components/ApplyPage/ApplySecond';
import ApplyThird from '@/components/ApplyPage/ApplyThird';
import FindPWAuth from '@/components/ApplyPage/FindPWAuth';
import FindPWEmail from '@/components/ApplyPage/FindPwEmail';
import FindPWReset from '@/components/ApplyPage/FindPWReset';
import Home from '@/components/ApplyPage/Home';
import Instruction from '@/components/ApplyPage/Instruction';
import RoundBtn from '@/components/ApplyPage/RoundBtn';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

enum Page {
  HOME,
  FIND_PW_EMAIL,
  FIND_PW_AUTH,
  FIND_PW_RESET,
  INSTRUCTION,
  APPLY_FISRT,
  APPLY_SECOND,
  APPLY_THIRD
}

const ApplyPage = () => {
  const [currentPage, setCurrentPage] = useState(Page.HOME);
  const nav = useNavigate();

  const handleHomeClick = () => {
    nav('/');
  };
  // document.documentElement.classList.add('dark');

  return (
    <div className="bg-secondary w-screen h-screen flex justify-center font-[D2Coding] text-primary [1.4rem] font-normal leading-normal">
      <div className="bg-primary flex flex-col w-[68rem] px-[2.4rem] pt-[1.2rem] pb-[2.4rem] gap-[8rem] min-h-screen">
        <section className="w-full flex justify-between items-center">
          <p>
            Likelion <span className="italic">Sogang</span>¹³ — — —{' '}
            <span className="italic">Recruiting</span>
          </p>
          <RoundBtn content="Home" handleClick={handleHomeClick}></RoundBtn>
        </section>
        {currentPage === Page.HOME && <Home />}
        {currentPage === Page.FIND_PW_EMAIL && <FindPWEmail />}
        {currentPage === Page.FIND_PW_AUTH && <FindPWAuth />}
        {currentPage === Page.FIND_PW_RESET && <FindPWReset />}
        {currentPage === Page.INSTRUCTION && <Instruction />}
        {currentPage === Page.APPLY_FISRT && <ApplyFirst />}
        {currentPage === Page.APPLY_SECOND && <ApplySecond />}
        {currentPage === Page.APPLY_THIRD && <ApplyThird />}
      </div>
    </div>
  );
};

export default ApplyPage;
