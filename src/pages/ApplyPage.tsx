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

// export enum Path {
//   친구추천,
//   SNS,
//   학교공지,
//   기타
// }

// export enum Track {
//   Backend,
//   Frontend,
//   Design
// }
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

export const initialApplication = {
  name: '',
  email: '',
  password: '',
  studentNum: '',
  major: '',
  phone: '',
  path: '',
  track: '',
  githubLink: '',
  portfolioLink: '',
  answer1: '',
  answer2: '',
  answer3: '',
  answer4: '',
  interviewTimes: []
};

const ApplyPage = () => {
  const [currentPage, setCurrentPage] = useState(Page.HOME);
  const [application, setApplication] =
    useState<Application>(initialApplication);
  const [toast, setToast] = useState({ text: '', isRender: false });
  const [isEdit, setIsEdit] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem('redirectToHome') === 'true') {
      sessionStorage.removeItem('redirectToHome'); // 플래그 제거
      handlePageChange(Page.HOME); // 새로고침 시 초기 페이지로 이동
    }
    // setCurrentPage(Number(localStorage.getItem('currentPage')));
    // setIsEdit(localStorage.getItem('isEdit') === 'true');
    return () => {
      // localStorage.setItem('currentPage', Page.HOME.toString());
      // localStorage.setItem('isEdit', 'false');
      // 🚨 로컬 스토리지 내 value 값을 유저가 임의로 변경하는 경우를 막기 위해 localStorage 저장 기능 삭제
    };
  }, []);

  useEffect(() => {
    if (toast.isRender == true) {
      setTimeout(() => {
        setToast({ ...toast, isRender: false });
      }, 3000);
    }
  }, [toast]);

  useEffect(() => {
    window.onbeforeunload = () => {
      sessionStorage.setItem('redirectToHome', 'true'); // 새로고침 시 플래그 저장
      return '새로고침 시 지원 초기 페이지로 이동합니다.';
    };
    return () => {
      window.onbeforeunload = null; // 컴포넌트가 언마운트되거나 currentPage가 변경될 때 제거
    };
  }, [currentPage]);

  const setEditStatus = (isEdit: boolean) => {
    setIsEdit(isEdit);
  };

  const getApplicationData = (data: Application) => {
    setApplication(data);
  };

  const handleHeaderBtnClick = (type: string) => {
    if (
      currentPage === Page.APPLY_SECOND ||
      currentPage === Page.APPLY_THIRD ||
      currentPage === Page.FIND_PW_AUTH ||
      currentPage === Page.FIND_PW_RESET
    ) {
      const isConfirmed = window.confirm(
        '현재까지의 진행 상황이 모두 초기화됩니다.\n정말 진행하시겠습니까?'
      );
      if (isConfirmed) {
        if (type === 'home') {
          // localStorage.setItem('currentPage', Page.HOME.toString());
          nav('/');
        } else if (type === 'apply') {
          handlePageChange(Page.HOME);
        }
      } else return;
    }
    if (type === 'home') {
      // localStorage.setItem('currentPage', Page.HOME.toString());
      nav('/');
    } else if (type === 'apply') {
      handlePageChange(Page.HOME);
    }
  };

  const saveApplicationData = (data: Record<string, string>) => {
    const { emailAuth, ...newApplication } = data;
    setApplication({ ...application, ...newApplication });
  };

  const handleToastRender = (text: string) => {
    if (text === undefined || text === '' || text === null) {
      setToast({ text: '오류가 발생했습니다.', isRender: true });
    } else {
      setToast({ text: text, isRender: true });
    }
  };

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    // localStorage.setItem('currentPage', page.toString());
    window.scrollTo(0, 0);
    if (page === Page.HOME) {
      setApplication(initialApplication);
    }
  };

  return (
    <div className="relative">
      <div className="bg-surface-secondary w-screen min-w-[68rem] min-h-screen flex justify-center font-[D2Coding] text-text-primary text-[1.6rem] font-normal leading-normal overflow-x-auto">
        <div className="bg-surface-primary border-x flex flex-col w-[68rem] px-[2.4rem] pt-[1.2rem] pb-[2.4rem] gap-[8rem] min-h-screen ">
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
                  content="Apply Main"
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
            <FindPWEmail
              handlePageChange={handlePageChange}
              handleToastRender={handleToastRender}
              getApplicationData={getApplicationData}
            />
          )}
          {currentPage === Page.FIND_PW_AUTH && (
            <FindPWAuth
              handlePageChange={handlePageChange}
              handleToastRender={handleToastRender}
              application={application}
            />
          )}
          {currentPage === Page.FIND_PW_RESET && (
            <FindPWReset
              handlePageChange={handlePageChange}
              handleToastRender={handleToastRender}
              application={application}
            />
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
              isEdit={isEdit}
            />
          )}
          {currentPage === Page.APPLY_FOURTH && (
            <ApplyFourth
              handlePageChange={handlePageChange}
              userName={application.name}
            />
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
