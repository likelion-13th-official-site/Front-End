import ApplyFirst from '@/components/ApplyPage/Pages/ApplyFirst';
import ApplySecond from '@/components/ApplyPage/Pages/ApplySecond';
import ApplyThird from '@/components/ApplyPage/Pages/ApplyThird';
import FindPWAuth from '@/components/ApplyPage/Pages/FindPWAuth';
import FindPWEmail from '@/components/ApplyPage/Pages/FindPWEmail';
import FindPWReset from '@/components/ApplyPage/Pages/FindPWReset';
import Home from '@/components/ApplyPage/Pages/Home';
import ApplyFourth from '@/components/ApplyPage/Pages/ApplyFourth';
import RoundBtn from '@/components/ApplyPage/RoundBtn';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeButton from '@/components/common/header/ThemeButton';
import RoundOneResult from '@/components/ApplyPage/Pages/RoundOneResult';
import RoundTwoResult from '@/components/ApplyPage/Pages/RoundTwoResult';

export enum Page {
  HOME,
  FIND_PW_EMAIL,
  FIND_PW_AUTH,
  FIND_PW_RESET,
  APPLY_FIRST,
  APPLY_SECOND,
  APPLY_THIRD,
  APPLY_FOURTH,
  ROUND_ONE_RESULT,
  ROUND_TWO_RESULT
}
export interface Application {
  name: string;
  email: string;
  password: string;
  studentNum: string;
  major: string;
  phone: string;
  path: string;
  track: string;
  githubLink: string;
  portfolioLink: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  interviewTimes: number[];
}

const ApplyPage = () => {
  const [currentPage, setCurrentPage] = useState(Page.HOME);
  const [application, setApplication] = useState<Application>({
    name: '',
    email: 'mwlucas@sogang.ac.kr',
    password: 'dfdfs@@@@d23',
    studentNum: 'zz',
    major: 'zz',
    phone: '010-4355-8294',
    path: 'SNS (인스타그램)',
    track: 'Back-End',
    githubLink: 'a.com',
    portfolioLink: '',
    answer1: 'sss',
    answer2: 'fff',
    answer3: 'ggg',
    answer4: 'ddd',
    interviewTimes: [1, 2, 3]
  });
  const [toast, setToast] = useState({ text: '', isRender: false });
  const [isEdit, setIsEdit] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    setCurrentPage(Number(localStorage.getItem('currentPage')));
    setIsEdit(localStorage.getItem('isEdit') === 'true');
  }, []);

  useEffect(() => {
    if (toast.isRender == true) {
      setTimeout(() => {
        setToast({ ...toast, isRender: false });
      }, 3000);
    }
  }, [toast]);

  const setEditStatus = (isEdit: boolean) => {
    setIsEdit(isEdit);
  };

  const getApplicationData = (data: Application) => {
    setApplication(data);
  };

  const handleHeaderBtnClick = (type: string) => {
    if (currentPage === Page.APPLY_SECOND || currentPage === Page.APPLY_THIRD) {
      const isConfirmed = window.confirm(
        '입력한 내용을 저장하지 않을 경우 입력한 내용이 모두 초기화됩니다. 정말 진행하시겠습니까?'
      );
      if (isConfirmed) {
        if (type === 'home') {
          localStorage.setItem('currentPage', Page.HOME.toString());
          nav('/');
        } else if (type === 'apply') {
          handlePageChange(Page.HOME);
        }
      }
      return;
    }
  };

  const saveApplicationData = (data: object) => {
    const { emailAuth, ...newApplication } = data;
    setApplication({ ...application, ...newApplication });
  };

  const handleToastRender = (text: string) => {
    setToast({ text: text, isRender: true });
  };

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    localStorage.setItem('currentPage', page.toString());
  };

  return (
    <div className="relative">
      <div className="bg-surface-secondary w-screen min-w-[68rem] min-h-screen flex justify-center font-[D2Coding] text-text-primary text-[1.6rem] font-normal leading-normal overflow-x-auto">
        <div className="bg-surface-primary border flex flex-col w-[68rem] px-[2.4rem] pt-[1.2rem] pb-[2.4rem] gap-[8rem] min-h-screen ">
          <section className="w-full flex justify-between items-center font-pp">
            <p>
              Likelion<span className="italic">Sogang</span>
              <span className="tracking-[-0.48rem]">¹³</span> ———{' '}
              <span className="italic">Recruiting</span>
            </p>
            <div className="flex gap-[0.8rem]">
              <RoundBtn
                content="Home"
                handleClick={() => {
                  handleHeaderBtnClick('home');
                }}
              ></RoundBtn>
              {currentPage !== Page.HOME && (
                <RoundBtn
                  content="Apply Page"
                  handleClick={() => {
                    handleHeaderBtnClick('apply');
                  }}
                ></RoundBtn>
              )}
              <ThemeButton isBlueBackground={false} />
            </div>
          </section>
          {currentPage === Page.HOME && (
            <Home
              handlePageChange={handlePageChange}
              getApplicationData={getApplicationData}
              handleToastRender={handleToastRender}
              setEditStatus={setEditStatus}
            />
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
            <ApplySecond
              handlePageChange={handlePageChange}
              saveApplicationData={saveApplicationData}
              handleToastRender={handleToastRender}
              application={application}
              isEdit={isEdit}
            />
          )}
          {currentPage === Page.APPLY_THIRD && (
            <ApplyThird
              handlePageChange={handlePageChange}
              application={application}
              handleToastRender={handleToastRender}
            />
          )}
          {currentPage === Page.APPLY_FOURTH && (
            <ApplyFourth handlePageChange={handlePageChange} />
          )}
          {currentPage === Page.ROUND_ONE_RESULT && (
            <RoundOneResult handlePageChange={handlePageChange} />
          )}
          {currentPage === Page.ROUND_TWO_RESULT && (
            <RoundTwoResult handlePageChange={handlePageChange} />
          )}
        </div>
      </div>
      {toast.isRender && (
        <div className="fixed font-d2 py-[1.2rem] px-[3.6rem] bg-text-primary text-surface-primary left-[50%] bottom-[10%] translate-x-[-50%] animate-toast-fadeInOut">
          {toast.text}
        </div>
      )}
    </div>
  );
};

export default ApplyPage;
