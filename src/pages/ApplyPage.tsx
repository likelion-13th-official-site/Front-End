import ApplyFirst from '@/components/ApplyPage/ApplyFirst';
import ApplySecond from '@/components/ApplyPage/ApplySecond';
import ApplyThird from '@/components/ApplyPage/ApplyThird';
import Checkbox from '@/components/ApplyPage/Checkbox';
import FindPWAuth from '@/components/ApplyPage/FindPWAuth';
import FindPWEmail from '@/components/ApplyPage/FindPWEmail';
import FindPWReset from '@/components/ApplyPage/FindPWReset';
import Home from '@/components/ApplyPage/Home';
import Instruction from '@/components/ApplyPage/Instruction';
import RoundBtn from '@/components/ApplyPage/RoundBtn';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export enum Page {
  HOME,
  FIND_PW_EMAIL,
  FIND_PW_AUTH,
  FIND_PW_RESET,
  INSTRUCTION,
  APPLY_FIRST,
  APPLY_SECOND,
  APPLY_THIRD
}

const ApplyPage = () => {
  const [currentPage, setCurrentPage] = useState(Page.HOME);
  const nav = useNavigate();

  useEffect(() => {
    setCurrentPage(Number(localStorage.getItem('currentPage')));
  }, []);

  const handleHomeClick = () => {
    nav('/');
  };

  const handleApplyPageClick = () => {
    setCurrentPage(Page.HOME);
  };

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    localStorage.setItem('currentPage', page.toString());
  };
  // document.documentElement.classList.add('dark');

  return (
    <div className="bg-secondary w-screen min-h-screen flex justify-center font-[D2Coding] text-primary text-[1.6rem] font-normal leading-normal">
      <div className="bg-primary flex flex-col w-[68rem] px-[2.4rem] pt-[1.2rem] pb-[2.4rem] gap-[8rem] min-h-screen">
        <section className="w-full flex justify-between items-center">
          <p>
            Likelion <span className="italic">Sogang</span>¹³ — — —{' '}
            <span className="italic">Recruiting</span>
          </p>
          <div className="flex gap-[0.8rem]">
            <RoundBtn content="Home" handleClick={handleHomeClick}></RoundBtn>
            {currentPage !== Page.HOME && (
              <RoundBtn
                content="Apply Page"
                handleClick={() => {
                  handlePageChange(Page.HOME);
                }}
              ></RoundBtn>
            )}
          </div>
        </section>
        {currentPage === Page.HOME && (
          <Home handlePageChange={handlePageChange} />
        )}
        {currentPage === Page.FIND_PW_EMAIL && (
          <FindPWEmail handlePageChange={handlePageChange} />
        )}
        {currentPage === Page.FIND_PW_AUTH && (
          <FindPWAuth handlePageChange={handlePageChange} />
        )}
        {currentPage === Page.FIND_PW_RESET && (
          <FindPWReset handlePageChange={handlePageChange} />
        )}
        {currentPage === Page.INSTRUCTION && <Instruction />}
        {currentPage === Page.APPLY_FIRST && <ApplyFirst />}
        {currentPage === Page.APPLY_SECOND && <ApplySecond />}
        {currentPage === Page.APPLY_THIRD && <ApplyThird />}
      </div>
    </div>
  );
};

export default ApplyPage;
