import React, { useEffect, useState } from 'react';
import SquareBtn from '../SquareBtn';
import FormBox from '../FormBox';
import { Page } from '@/pages/ApplyPage';

interface LoginData {
  email: string;
  password: string;
}

interface HomeProps {
  handlePageChange: (page: Page) => void;
}

const Home = ({ handlePageChange }: HomeProps) => {
  const [roundNum, setRoundNum] = useState<'apply' | 'one' | 'two'>('one');
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: ''
  });

  useEffect(() => {
    const now = new Date();
    const roundOneAnnounceDate = new Date(now.getFullYear(), 2, 8, 20, 0, 0);
    const roundTwoAnnounceDate = new Date(now.getFullYear(), 2, 14, 20, 0, 0);
    if (now < roundOneAnnounceDate) setRoundNum('apply');
    else if (now >= roundOneAnnounceDate && now < roundTwoAnnounceDate)
      setRoundNum('one');
    else setRoundNum('two');
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'EMAIL':
        setLoginData({ ...loginData, email: e.target.value });
        break;
      case 'PASSWORD':
        setLoginData({ ...loginData, password: e.target.value });
        break;
      default:
        break;
    }
  };

  const handleRedirectBtn = () => {
    if (roundNum === 'apply') {
      //API call
      setLoginData({ email: '', password: '' });
      handlePageChange(Page.APPLY_SECOND);
    } else if (roundNum === 'one') {
      handlePageChange(Page.ROUND_ONE_RESULT);
    } else if (roundNum === 'two') {
      handlePageChange(Page.ROUND_TWO_RESULT);
    }
  };

  const handleFindPWBtn = () => {
    setLoginData({ email: '', password: '' });
    handlePageChange(Page.FIND_PW_EMAIL);
  };

  const handleCreateBtn = () => {
    //API call
    setLoginData({ email: '', password: '' });
    handlePageChange(Page.APPLY_FIRST);
  };

  return (
    <section className="flex flex-col gap-[8rem] text-[1.4rem]  ">
      {roundNum === 'apply' && (
        <div className="flex flex-col gap-[1.2rem]">
          <p className="font-bold">처음 지원서를 작성하신다면,</p>
          <SquareBtn
            content="지원서 생성하기"
            handleClick={handleCreateBtn}
            status="default"
          ></SquareBtn>
        </div>
      )}

      <div className="flex flex-col gap-[4.8rem]">
        <p className="font-bold">
          {roundNum === 'apply'
            ? '이미 작성하던 지원서가 있으시다면,'
            : roundNum === 'one'
              ? '1차 결과 확인하기'
              : '2차 결과 확인하기'}
        </p>
        <FormBox
          name={'EMAIL'}
          title={'EMAIL'}
          handleChange={handleInput}
          isError={false}
          isExplanation={false}
          placeholder=""
        ></FormBox>
        <FormBox
          title={'PASSWORD'}
          name={'PASSWORD'}
          handleChange={handleInput}
          isError={false}
          isExplanation={false}
          placeholder=""
          inputType="password"
        ></FormBox>
        <SquareBtn
          content={roundNum === 'apply' ? '지원서 수정하기' : '결과 확인'}
          handleClick={handleRedirectBtn}
          status={
            loginData.email === '' || loginData.password === ''
              ? 'disabled'
              : 'default'
          }
        ></SquareBtn>
        <div className="flex justify-center">
          <button
            className="text-center underline cursor-pointer hover:text-text-secondary w-auto"
            onClick={handleFindPWBtn}
          >
            비밀번호 찾기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
