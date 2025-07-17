import { Outlet, Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from '../components/ApplyPage/Pages/Home';
import FindPWEmail from '../components/ApplyPage/Pages/FindPWEmail';
import FindPWAuth from '../components/ApplyPage/Pages/FindPWAuth';
import FindPWReset from '../components/ApplyPage/Pages/FindPWReset';
import ApplyFirst from '../components/ApplyPage/Pages/ApplyFirst';
import ApplySecond from '../components/ApplyPage/Pages/ApplySecond';
import ApplyThird from '../components/ApplyPage/Pages/ApplyThird';
import ApplyFourth from '../components/ApplyPage/Pages/ApplyFourth';
import RoundOneResult from '../components/ApplyPage/Pages/RoundOneResult';
import RoundTwoResult from '../components/ApplyPage/Pages/RoundTwoResult';

import RoundBtn from '../components/ApplyPage/RoundBtn';
import ThemeButton from '@/components/common/header/ThemeButton';

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

export const initialApplication: Application = {
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

export interface Result {
  name: string;
  status: string;
  track?: string;
  interviewStartTime?: string;
  interviewEndTime?: string;
}

const ApplyPage = () => {
  const [application, setApplication] =
    useState<Application>(initialApplication);
  const [result, setResult] = useState<Result>({ name: '', status: '' });
  const [toast, setToast] = useState({ text: '', isRender: false });
  const [isEdit, setIsEdit] = useState(false);
  const nav = useNavigate();

  const handleToastRender = (text: string) => {
    setToast({ text: text || '오류가 발생했습니다.', isRender: true });
  };

  useEffect(() => {
    if (toast.isRender) {
      const timer = setTimeout(() => {
        setToast({ ...toast, isRender: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleHeaderBtnClick = (to: string) => {
    const confirmReset = window.confirm(
      '현재까지의 진행 상황이 모두 초기화됩니다.\n정말 진행하시겠습니까?'
    );
    if (!confirmReset) return;

    nav(to);
    setApplication(initialApplication);
  };


  const saveApplicationData = (data: Application | Record<string, string>) => {
  setApplication((prev) => ({
    ...prev,
    ...data
  }));
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
              <RoundBtn content="Home" handleClick={() => nav('/')} />
              <RoundBtn content="Apply Main" handleClick={() => handleHeaderBtnClick('/apply')} />
              <ThemeButton isBlueBackground={false} />
            </div>
          </section>

          {/* 👇 하위 페이지 라우팅 */}
          <Routes>
            <Route path="/" element={
              <Home
                setApplicationData={setApplication}
                setResultData={setResult}
                handleToastRender={handleToastRender}
                setEditStatus={setIsEdit}
              />
            } />
            <Route path="/find-pw-email" element={
              <FindPWEmail
                handleToastRender={handleToastRender}
                setApplicationData={setApplication}
              />
            } />
            <Route path="/find-pw-auth" element={
              <FindPWAuth
                handleToastRender={handleToastRender}
                application={application}
              />
            } />
            <Route path="/find-pw-reset" element={
              <FindPWReset
                handleToastRender={handleToastRender}
                application={application}
              />
            } />
            <Route path="/apply-first" element={<ApplyFirst />} />
            <Route path="/apply-second" element={
              <ApplySecond
                saveApplicationData={saveApplicationData}
                handleToastRender={handleToastRender}
                application={application}
                isEdit={isEdit}
              />
            } />
            <Route path="/apply-third" element={
              <ApplyThird
                application={application}
                handleToastRender={handleToastRender}
                isEdit={isEdit}
              />
            } />
            <Route path="/apply-fourth" element={
              <ApplyFourth
                userName={application.name}
              />
            } />
            <Route path="/round-one-result" element={
              <RoundOneResult
                result={result}
              />
            } />
            <Route path="/round-two-result" element={
              <RoundTwoResult
                result={result}
              />
            } />
          </Routes>
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
