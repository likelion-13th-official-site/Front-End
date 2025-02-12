import ApplyFirst from '@/components/ApplyPage/Pages/ApplyFirst';
import ApplySecond from '@/components/ApplyPage/Pages/ApplySecond';
import ApplyThird from '@/components/ApplyPage/Pages/ApplyThird';
import FindPWAuth from '@/components/ApplyPage/Pages/FindPWAuth';
import FindPWEmail from '@/components/ApplyPage/Pages/FindPWEmail';
import FindPWReset from '@/components/ApplyPage/Pages/FindPWReset';
import Home from '@/components/ApplyPage/Pages/Home';
import ApplyFourth from '@/components/ApplyPage/Pages/ApplyFourth';
import Instruction from '@/components/ApplyPage/Pages/ApplyFourth';
import RoundBtn from '@/components/ApplyPage/RoundBtn';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeButton from '@/components/common/header/ThemeButton';

export enum Page {
  HOME,
  FIND_PW_EMAIL,
  FIND_PW_AUTH,
  FIND_PW_RESET,
  APPLY_FIRST,
  APPLY_SECOND,
  APPLY_THIRD,
  APPLY_FOURTH
}

const ApplyPage = () => {
  const [currentPage, setCurrentPage] = useState(Page.HOME);
  const nav = useNavigate();

  useEffect(() => {
    setCurrentPage(Number(localStorage.getItem('currentPage')));
  }, []);

  const handleHomeClick = () => {
    localStorage.setItem('currentPage', Page.HOME.toString());
    nav('/');
  };

  // const handleApplyPageClick = () => {
  //   setCurrentPage(Page.HOME);
  // };

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    localStorage.setItem('currentPage', page.toString());
  };
  // document.documentElement.classList.add('dark');

  return (
    <div className="bg-surface-secondary w-screen min-h-screen flex justify-center font-[D2Coding] text-text-primary text-[1.6rem] font-normal leading-normal">
      <div className="bg-surface-primary border flex flex-col w-[68rem] px-[2.4rem] pt-[1.2rem] pb-[2.4rem] gap-[8rem] min-h-screen">
        <section className="w-full flex justify-between items-center font-pp">
          <p>
            Likelion<span className="italic">Sogang</span>¹³ ———{' '}
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
            <ThemeButton />
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
        {currentPage === Page.APPLY_FIRST && (
          <ApplyFirst handlePageChange={handlePageChange} />
        )}
        {currentPage === Page.APPLY_SECOND && (
          <ApplySecond handlePageChange={handlePageChange} />
        )}
        {currentPage === Page.APPLY_THIRD && (
          <ApplyThird handlePageChange={handlePageChange} />
        )}
        {currentPage === Page.APPLY_FOURTH && (
          <ApplyFourth handlePageChange={handlePageChange} />
        )}
      </div>
    </div>
  );
};

export default ApplyPage;
