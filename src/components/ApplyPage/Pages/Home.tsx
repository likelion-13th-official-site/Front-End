import React, { useState } from 'react';
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
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: ''
  });
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

  const handleEditBtn = () => {
    //API call
    setLoginData({ email: '', password: '' });
    handlePageChange(Page.APPLY_SECOND);
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
      <div className="flex flex-col gap-[1.2rem]">
        <p className="font-bold">처음 지원서를 작성하신다면,</p>
        <SquareBtn
          content="지원서 생성하기"
          handleClick={handleCreateBtn}
          status="default"
        ></SquareBtn>
      </div>
      <div className="flex flex-col gap-[4.8rem]">
        <p className="font-bold">이미 작성하던 지원서가 있으시다면,</p>
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
          content="지원서 수정하기"
          handleClick={handleEditBtn}
          status={
            loginData.email === '' || loginData.password === ''
              ? 'disabled'
              : 'default'
          }
        ></SquareBtn>
        <button
          className="text-center underline cursor-pointer"
          onClick={handleFindPWBtn}
        >
          비밀번호 찾기
        </button>
      </div>
    </section>
  );
};

export default Home;
