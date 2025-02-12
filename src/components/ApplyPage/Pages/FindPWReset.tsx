import { Page } from '@/pages/ApplyPage';
import React, { useState } from 'react';
import SquareBtn from '../SquareBtn';
import FormBox from '../FormBox';

interface FindPWEmailProps {
  handlePageChange: (page: Page) => void;
}

const FindPWReset = ({ handlePageChange }: FindPWEmailProps) => {
  const [password, setPassword] = useState('');
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRequestBtn = () => {
    //API call
    handlePageChange(Page.HOME);
  };

  return (
    <section className="flex flex-col gap-[4.8rem] text-[1.4rem]  ">
      <p className="font-bold">
        사용자 인증이 완료되었습니다. 새 비밀번호를 입력해주세요.
      </p>

      <FormBox
        name={'NEW PASSWORD'}
        title={'NEW PASSWORD'}
        handleChange={handleInput}
        isError={false}
        isExplanation={true}
        placeholder=""
        inputType="password"
        explanation="비밀번호는 8~20자의 영문, 숫자를 혼합하여 설정해주세요."
      ></FormBox>
      <SquareBtn
        content="완료"
        handleClick={handleRequestBtn}
        status={password === '' ? 'disabled' : 'default'}
      ></SquareBtn>
    </section>
  );
};

export default FindPWReset;
